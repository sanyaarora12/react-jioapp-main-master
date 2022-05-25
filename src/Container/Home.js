import React, { Component } from "react";
import { Link } from "react-router-dom";
import GlobalStyles from "../Components/Global";
import HomeStyles from "../Components/HomeStyles";

export class Home extends Component {
  render() {
    return (
      <div>
        <HomeStyles />
        <GlobalStyles />
        <h1>Welcome to JioPos Lite</h1>
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          <Link to="/form" style={{ textDecoration: "none", color: "White" }}>
            Login
          </Link>
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          <Link
            to="/validatedloginform"
            style={{ textDecoration: "none", color: "White" }}
          >
            Register
          </Link>
        </button>
      </div>
    );
  }
}
export default Home;
