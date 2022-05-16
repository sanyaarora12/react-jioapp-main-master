import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <strong>Welcome to Jio POSLite</strong>
        </h1>
        <br />
        <button type="button" id="Loginbtn" className="btn btn-primary btn-lg">
          <Link to="/header" style={{ textDecoration: "none", color: "White" }}>
            Login
          </Link>
        </button>
        <br />
        <br />
        <button type="button" id="Loginbtn" className="btn btn-primary btn-lg">
          <Link to="/page" style={{ textDecoration: "none", color: "White" }}>
            Register
          </Link>
        </button>
      </div>
    );
  }
}
export default Home;
