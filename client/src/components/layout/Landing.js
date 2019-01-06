import React, { Component } from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";

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
                  <Register />
                  <Login />
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
