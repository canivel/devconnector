import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue-grey darken-3">
        <div className="footer-copyright">
          <div className="container">
            &copy; {new Date().getFullYear()} Copyright DS Directory
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
