import React from "react";
import { Link } from "react-router-dom";
import HomeStyles from "../Components/HomeStyles";

export default function Header() {
  return ( 
    <header>
      <HomeStyles />
      <div className="App">
        <h1>Welcome to JioPos Lite</h1>
        <div>
        <input type="text" placeholder="Enter your number"  />
      </div>
        <button>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </button>
      </div>
    </header>
  );
}

