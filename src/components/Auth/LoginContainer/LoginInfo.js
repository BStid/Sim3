import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/reducer";
import { Redirect } from "react-router-dom";
import smile from "../pictures/smile.png";
import "../Auth.css";

class LoginInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { usernameInput, passwordInput } = this.props;
    return (
      <div className="loginInfo">
        <img src={smile} alt="smile" className="smileyIcon" />
        <h1>Helo</h1>
        <div className="inputContainer">
          <p>Username: </p>
          <input
            type="text"
            name="usernameInput"
            onChange={e => this.props.updateInput(e)}
          />
        </div>
        <div className="inputContainer">
          <p>Password: </p>
          <input
            type="password"
            name="passwordInput"
            onChange={e => this.props.updateInput(e)}
          />
        </div>
        <div className="loginButtonContainer">
          <button
            className="button"
            id="login"
            onClick={() => this.props.checkUser(usernameInput, passwordInput)}
          >
            Login
          </button>{" "}
          <button
            className="button"
            id="register"
            onClick={() => this.props.toggleRegister()}
          >
            Register
          </button>
          {this.props.redirect !== false && (
            <Redirect to="/dashboard/content" />
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
    updateInput
  }
)(LoginInfo);
