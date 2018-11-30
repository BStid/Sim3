import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import homelogo from "./pictures/homelogo.png";
import newPost from "./pictures/newPost.png";
import shutdown from "./pictures/shutdown.png";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="navBar">
        <div className="userProfileContainer">
          <div
            className="userProfile"
            style={{
              backgroundImage: `url(https://robohash.org/${this.props.user})`
            }}
          />
          <p>{this.props.user}</p>
        </div>
        <div className="iconContainer">
          <Link to="/dashboard/content">
            <img src={homelogo} alt="home" />
          </Link>

          <Link to="/dashboard/post">
            <img src={newPost} alt="new post" />
          </Link>
        </div>
        <div className="bottomContainer">
          <Link to="/">
            <img src={shutdown} alt="log out" />
          </Link>
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
  {}
)(Nav);
