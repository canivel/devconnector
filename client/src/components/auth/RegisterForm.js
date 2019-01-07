import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class RegisterForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <span class="helper-text" data-error={error} />;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="input-field col s12">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="col s12"
      >
        <Field
          name="name"
          type="text"
          component={this.renderInput}
          label="Enter Name"
        />
        <Field
          name="email"
          type="email"
          component={this.renderInput}
          label="Enter Name"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          label="Enter Name"
        />
        <Field
          name="confirmPassword"
          type="password"
          component={this.renderInput}
          label="Enter Name"
        />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = "You must enter your name";
  }

  if (!formValues.email) {
    errors.email = "You must enter a email";
  }

  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  if (!formValues.confirmPassword) {
    errors.confirmPassword = "You must confirm the password";
  }

  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);
