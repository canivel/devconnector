import React, { Component } from "react";
import Modal from "../layout/Modal";

export class Login extends Component {
  renderActions() {
    return (
      <>
        <button className="modal-close waves-effect waves-blue btn-flat blue white-text">
          Sign In
        </button>
      </>
    );
  }

  renderBtn() {
    return (
      <button
        className="waves-effect waves-light btn blue white-text modal-trigger"
        data-target="loginModal"
        style={{ marginLeft: "10px" }}
      >
        Login
      </button>
    );
  }

  renderHeader() {
    return <h4 className="grey-text">Login</h4>;
  }

  renderContent = () => {
    return <p className="grey-text">Modal Content</p>;
  };

  render() {
    return (
      <>
        {this.renderBtn()}
        <Modal
          modalId="loginModal"
          header={this.renderHeader()}
          content={this.renderContent()}
          actions={this.renderActions()}
          modalClassName="modal modal-fixed-footer"
          dismissible={true}
        />
      </>
    );
  }
}

export default Login;
