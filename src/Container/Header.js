import React from "react";
import { Link } from "react-router-dom";
import HomeStyles from "../Components/HomeStyles";

export default function Header() {
  return (
    <header>
      <div className="App">
        <HomeStyles />
        <h1>Welcome to Header Page</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go To Home
          </Link>
        </button>
      </div>
    </header>
  );
}
