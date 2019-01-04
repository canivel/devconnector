import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner grey-text text-lighten-5">
          <div className="container">
            <div className="row">
              <div className="m12 center-align">
                <h1>Data Scientist Directory</h1>
                <p>
                  Create a data scientist profile/portfolio, share posts and get
                  help from other scientists
                </p>
                <div className="row">
                  <Link
                    to="/register"
                    className="waves-effect waves-light btn-flat green lighten-1 white-text"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/login"
                    className="waves-effect waves-light btn-flat blue white-text"
                    style={{ marginLeft: "10px" }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
