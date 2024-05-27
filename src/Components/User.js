import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import app from "../firebase"


const database = getDatabase(app);

class User extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      submit: false,
      question: {},
      id:uuidv4()
    };
  }

  DetailsHandler = (e) => {
    e.preventDefault();
    // alert("fjhgifdh");

    this.setState({
      name: e.target.name.value,
      email: e.target.email.value,
      submit: true,
    });
  };
  questionHandler = (e) => {
    e.preventDefault();
    // alert("jhdfgu");
    const question = {};
    question.q1 = e.target.q1.value;
    question.q2 = e.target.q2.value;
    question.q3 = e.target.q3.value;
    question.other = e.target.other.value;

    this.setState({
      question: question,
    });
    const userRef=ref(database,`users/${this.state.id}`)
    set(userRef, {
      name: this.state.name,
      email: this.state.email,
      question: question,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">User Survey</h2>
            </div>
          </div>
        </section>
        {this.state.submit === false ? (
          <Details submit={this.DetailsHandler}></Details>
        ) : (
          <Question qSubmit={this.questionHandler}></Question>
        )}
      </>
    );
  }
}
export default User;
