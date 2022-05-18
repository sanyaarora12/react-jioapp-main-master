import React from "react";
import { Link } from "react-router-dom";
import GlobalStyles from "../Components/Global";
import HomeStyles from "../Components/HomeStyles";

export default function Header() {
  return (
    <header>
      <HomeStyles />
      <GlobalStyles />
      <div className="App">
        <div>
          <h1>Welcome</h1>
          <h2>Become a JIO Associate and start earning now!</h2>
          <input type="text" placeholder="Enter your number" />
          <br />
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
