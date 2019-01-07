import React, { Component } from "react";
import Modal from "../layout/Modal";
import { RegisterForm } from "./RegisterForm";
import { connect } from "react-redux";
import { registerNewAccount } from "../../actions";
export class Register extends Component {
  renderActions() {
    return (
      <>
        <button className="modal-close waves-effect waves-red btn-flat grey white-text left">
          Cancel
        </button>
        <button className="modal-close waves-effect waves-green btn-flat green white-text right">
          Create
        </button>
      </>
    );
  }

  renderBtn() {
    return (
      <button
        className="waves-effect waves-light btn modal-trigger"
        data-target="registerModal"
      >
        Register
      </button>
    );
  }

  renderHeader() {
    return <h4 className="grey-text">Create new Account</h4>;
  }

  onSubmit = formValues => {
    this.props.registerNewAccount(formValues);
  };

  renderContent = () => {
    return (
      <div className="row">
        <RegisterForm onSubmit={this.onSubmit} />
      </div>
    );
  };

  render() {
    return (
      <>
        {this.renderBtn()}
        <Modal
          modalId="registerModal"
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

export default connect(
  null,
  { registerNewAccount }
)(Register);
