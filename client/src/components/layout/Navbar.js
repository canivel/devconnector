import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            DevConnector
          </a>
          <ul className="left">
            <li>
              <a href="#" className="left">
                Developers
              </a>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
