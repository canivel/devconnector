import React, { Component } from "react";
import Modal from "../layout/Modal";

export class Register extends Component {
  state = {
    view: { showModal: false }
  };
  handleHideModal = () => {
    this.setState({ view: { showModal: false } });
  };
  handleShowModal = () => {
    this.setState({ view: { showModal: true } });
  };
  renderActions() {
    return (
      <React.Fragment>
        <button className="modal-close waves-effect waves-grey btn-flat grey">
          Cancel
        </button>
        <button className="modal-close waves-effect waves-green btn-flat green">
          Create
        </button>
      </React.Fragment>
    );
  }
  render() {
    return (
      <>
        <button
          className="waves-effect waves-light btn-flat green lighten-1 white-text"
          data-target="registerModal"
        >
          Register
        </button>
        <Modal
          title="Create new Account"
          modalId="registerModal"
          content="Modal Content"
          actions={this.renderActions()}
          modalClassName="modal modal-fixed-footer"
          dismissible={false}
        />
      </>
    );
  }
}

export default Register;
