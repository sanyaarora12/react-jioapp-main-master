import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
import Home from "../Container/Home";
import Page from "../Container/Page";
import Terms from "../Container/Terms";
import Login from "../Container/Login"

export default function Routers () {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/page" element={<Page />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
    </div>
  )
}
