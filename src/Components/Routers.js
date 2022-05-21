import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
import Home from "../Container/Home";
import Page from "../Container/Page";
import Terms from "../Container/Terms";
import Login from "../Container/Login"
import ValidatedLoginForm from "../Container/ValidatedLoginForm";
import { LoginForm } from "../Container/LoginForm";
import Otp from "../Container/Otp";

export default function Routers () {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/header" element={<Header />} /><Route path="/terms" element={<Terms />} />
            <Route path="/page" element={<Page />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ValidatedLoginForm" element={<ValidatedLoginForm/>} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/Otp" element={<Otp />} />
          </Routes>
        </Router>
    </div>
  )
}
