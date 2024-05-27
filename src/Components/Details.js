import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
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
                <form onSubmit={this.props.submit}>
                  <div className="mb-3">
                    <label className="form-label">1. Name</label>
                    <input
                    name="name"
                      placeholder="Please enter your name"
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      2. Email
                    </label>
                    <input
                    name="email"
                      placeholder="Please enter your email"
                      type="email"
                      className="form-control"
                    ></input>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Next
                  </button>
                </form>
                <div
                  className="d-flex justify-content-center mt-3"
                  aria-label="Page mx-auto d-block navigation example"
                >
                  <ul className="pagination ">
                    <li className="page-item">
                      <Link
                        className="page-link border-0 bg-primary text-white"
                        to="#"
                      >
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link border-0 text-dark" to="#">
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
export default Details;
