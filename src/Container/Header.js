import React from "react";
import { Link } from "react-router-dom";
import GlobalStyles from "../Components/Global";


export default function Header() {
  return (
    <header>
      <div className="App">
      <GlobalStyles />
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
