import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              DS Directory
            </Link>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/profiles" className="left">
                  Data Scientists
                </Link>
              </li>
              <li style={{ marginLeft: "50px" }}>
                <Link to="/register">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
