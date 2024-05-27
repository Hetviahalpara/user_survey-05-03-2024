import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <section className="container mt-5">
          <div className="row">
            <div className="col justify-content-center d-flex">
              <div className="w-50">
                <form onSubmit={this.props.qSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      3. What are you currently doing?
                    </label>
                    <div>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="q1"
                        id="exampleRadios1"
                        value="Teaching"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Teaching
                      </label>
                      <input
                        className="form-check-input me-2 ms-3"
                        type="radio"
                        name="q1"
                        id="exampleRadios1"
                        value="Student"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Student
                      </label>
                      <input
                        className="form-check-input me-2 ms-3"
                        type="radio"
                        name="q1"
                        id="exampleRadios1"
                        value="Programmer"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Programmer
                      </label>
                      <input
                        className="form-check-input me-2 ms-3"
                        type="radio"
                        name="q1"
                        id="exampleRadios1"
                        value="Other"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Other
                      </label>
                    </div>
                    <input
                    name="other"
                      placeholder="Type here if not listed"
                      type="text"
                      className="form-control mt-3"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      4. Please rate your course
                    </label>
                    <div>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="q2"
                        id="exampleRadios1"
                        value="Poor"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Poor
                      </label>
                      <input
                        className="form-check-input me-2 ms-3"
                        type="radio"
                        name="q2"
                        id="exampleRadios1"
                        value="Good"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Good
                      </label>
                      <input
                        className="form-check-input me-2 ms-3"
                        type="radio"
                        name="q2"
                        id="exampleRadios1"
                        value="Excellent"
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Excellent
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      5. Write your review here
                    </label>
                    <textarea 
                      name="q3"
                      rows="4"
                      type="text"
                      className="form-control"
                    ></textarea >
                  </div>
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </form>
                <div
                  className="d-flex justify-content-center mt-3"
                  aria-label="Page mx-auto d-block navigation example"
                >
                  <ul className="pagination ">
                    <li className="page-item">
                      <Link className="page-link border-0 text-dark " to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link border-0 bg-primary text-white"
                        to="#"
                      >
                        2
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Question;
