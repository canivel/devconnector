import React, { Component } from "react";
import M from "materialize-css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.2,
      dismissible: this.props.dismissible,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={this.props.modalId}
          className="modal"
        >
          <div className="modal-content">
            {this.props.header}
            {this.props.content}
          </div>
          <div className="modal-footer">{this.props.actions}</div>
        </div>
      </>
    );
  }
}

export default Modal;
