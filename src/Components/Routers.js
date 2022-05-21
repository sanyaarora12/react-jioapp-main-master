import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
import Home from "../Container/Home";
import Terms from "../Container/Terms";
import ValidatedLoginForm from "../Container/ValidatedLoginForm";
import { LoginForm } from "../Container/LoginForm";
import KycPage from "../Container/KycPage";
import Otp from "../Container/Otp";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ValidatedLoginForm" element={<ValidatedLoginForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/KycPage" element={<KycPage />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </Router>
    </div>
  );
}
