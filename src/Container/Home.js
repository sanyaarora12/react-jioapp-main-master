import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeStyles from "../Components/HomeStyles";

export class Home extends Component {
  render() {
    return (
      <div>
        <HomeStyles />
        <h1>Welcome to Jio POSLite</h1>
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          <Link to="/header" style={{ textDecoration: "none", color: "White" }}>
            Login
          </Link>
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          <Link to="/page" style={{ textDecoration: "none", color: "White" }}>
            Register
          </Link>
        </button>
      </div>
    );
  }
}
export default Home;
