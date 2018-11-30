import React, { Component } from "react";
import search from "./pictures/searchIcon.png";
import "./Dashboard.css";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="dashContentOuter">
        <div className="inputContainerDash">
          <input type="text" placeholder="Search by Title" />
          <div className="searchButton">
            <img src={search} alt="search" />
          </div>
          <button className="resetButton">Reset</button>
        </div>
      </div>
    );
  }
}

export default DashBoard;
