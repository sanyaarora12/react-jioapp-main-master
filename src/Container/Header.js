import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

export default function Header() {
  return (
    <header>
      <Button />
      <div className="App">
        <h1>Welcome to Header Page</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            GoTo Home
          </Link>
        </button>
      </div>
    </header>
  );
}
