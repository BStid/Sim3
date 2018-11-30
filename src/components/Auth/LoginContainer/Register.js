import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateInput, registerUser } from "../../../redux/reducer";
import "../Auth.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  async registerUser(usernameRegisterInput, passwordRegisterInput) {
    const { errorMessage } = this.props;
    await this.props.registerUser(usernameRegisterInput, passwordRegisterInput);
    (await errorMessage)
      ? this.setState({ refresh: true })
      : this.setState({ redirect: true });
  }
  render() {
    const {
      usernameRegisterInput,
      passwordRegisterInput,
      errorMessage
    } = this.props;
    const { redirect } = this.state;
    return (
      <div className="loginInfo">
        <h1>Register</h1>
        <div className="inputContainer">
          <p>Username: </p>
          <input
            type="text"
            name="usernameRegisterInput"
            onChange={e => this.props.updateInput(e)}
          />
        </div>
        <div className="inputContainer">
          <p>Password: </p>
          <input
            type="password"
            name="passwordRegisterInput"
            onChange={e => this.props.updateInput(e)}
          />
        </div>
        <button
          className="button"
          id="signUp"
          onClick={() =>
            this.registerUser(usernameRegisterInput, passwordRegisterInput)
          }
        >
          Sign Up
        </button>
        {errorMessage ? (
          <div className="errorMessage"> Username already exists. </div>
        ) : redirect ? (
          <Redirect to="/dashboard/content" />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    updateInput,
    registerUser
  }
)(Register);
