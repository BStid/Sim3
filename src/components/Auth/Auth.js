import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, updateInput } from "../../redux/reducer";
import smile from "./pictures/smile.png";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {};
    this.checkUser = this.checkUser.bind(this);
  }
  checkUser() {
    const { usernameInput, passwordInput, user } = this.props;
    console.log(user);

    this.props.getUser(usernameInput, passwordInput);
    user
      ? alert("Success")
      : alert("Username or Password Incorrect, please sign up.");
  }

  //TODO WHEN YOU GET BACK: Look up ways to redirect based off of true/false when button is pressed. Google 'redirect based on password'
  //TODO: Fix checkUser to actually check the right value of user instead of automatically going to true;
  render() {
    return (
      <div className="authOuter">
        <div className="authLoginContainer">
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
              onClick={() => this.checkUser()}
            >
              Login
            </button>{" "}
            <button className="button" id="register">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getUser,
    updateInput
  }
)(Auth);
