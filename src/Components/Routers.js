import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
// import Home from "../Container/Home";
import Terms from "../Container/Terms";
import ValidatedLoginForm from "../Container/ValidatedLoginForm";
import { LoginForm } from "../Container/LoginForm";
import Otp from "../Container/Otp";
import ValidatedBankDetails from "../Container/ValidatedBankDetails";
import SuccessfulRegistration from "../Container/SuccessfulRegistration";
import Form from "../Container/Form";

import Kycform from "../Container/KycForm";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/form3" element={<Form3 />} />
          <Route path="/header" element={<Header />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ValidatedLoginForm" element={<ValidatedLoginForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          
          <Route path="/otp" element={<Otp />} />
          <Route path="/Kycform" element={<Kycform />} />
          
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
