import React, { Component } from "react";
import Modal from "../layout/Modal";

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

  renderContent = () => {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="name" type="text" className="validate" />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="confirmPassword"
                type="password"
                className="validate"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
        </form>
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

export default Register;
