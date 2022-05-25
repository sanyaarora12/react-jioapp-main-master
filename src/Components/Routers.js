import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
import Home from "../Container/Home";
import Terms from "../Container/Terms";
import ValidatedLoginForm from "../Container/ValidatedLoginForm";
import { LoginForm } from "../Container/LoginForm";
import KycPage from "../Container/KycPage";
import ValidatedKyc from "../Container/ValidatedKyc";
import Address from "../Container/Address";
import Otp from "../Container/Otp";
import { BankDetails } from "../Container/BankDetails";
import ValidatedBankDetails from "../Container/ValidatedBankDetails";
import SuccessfulRegistration from "../Container/SuccessfulRegistration";

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
          <Route path="/ValidatedKyc" element={<ValidatedKyc />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route
            path="/validatedbankdetails"
            element={<ValidatedBankDetails />}
          />
          <Route
            path="/successfulregistration"
            element={<SuccessfulRegistration />}
          />
        </Routes>
      </Router>
    </div>
  );
}
