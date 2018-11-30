import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser, updateInput } from "../../redux/reducer";
import LoginInfo from "./LoginContainer/LoginInfo";
import Register from "./LoginContainer/Register";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = { redirect: false, register: false };

    this.checkUser = this.checkUser.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }
  async checkUser(username, password) {
    await this.props.checkUser(username, password);
    await this.evaluateUsername();
  }

  toggleRegister = () => {
    this.setState({ register: true });
  };
  evaluateUsername() {
    const { user, usernameInput } = this.props;
    user === usernameInput
      ? this.setState({ redirect: true })
      : alert("Username or Password Incorrect, please sign up.");
  }

  render() {
    const { register } = this.state;
    return (
      <div className="authOuter">
        <div className="authLoginContainer">
          {!register ? (
            <LoginInfo
              checkUser={this.checkUser}
              redirect={this.state.redirect}
              toggleRegister={this.toggleRegister}
            />
          ) : (
            <Register />
          )}
        </div>
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
    checkUser,
    updateInput
  }
)(Auth);
