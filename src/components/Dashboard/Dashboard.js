import React, { Component } from "react";
import Nav from "../Nav/Nav";
import routes from "../../routes";
import "./Dashboard.css";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="dashBoardOuter">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default DashBoard;
