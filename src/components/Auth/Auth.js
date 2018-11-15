import React, { Component } from "react";
import smile from "./pictures/smile.png";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="authOuter">
        <div className="authLoginContainer">
          <img src={smile} alt="smile" className="smileyIcon" />
          <h1>Helo</h1>
          <div className="inputContainer">
            <p>Username: </p>
            <input type="text" />
          </div>
          <div className="inputContainer">
            <p>Password: </p>
            <input type="password" />
          </div>
          <div className="loginButtonContainer">
            <button className="button" id="login">
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

export default Auth;
