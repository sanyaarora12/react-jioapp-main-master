import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Container/Header";
// import Home from "../Container/Home";
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
<<<<<<< HEAD
import Form from "../Container/Form";
import Kycform from "../Container/KycForm";
=======
import  Form  from "../Container/Form";
import  Form3  from "../Container/Form3";
>>>>>>> d286764e2cf5f8fcae171fae424b3fbae54fd624

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
          <Route path="/KycPage" element={<KycPage />} />
          <Route path="/ValidatedKyc" element={<ValidatedKyc />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Kycform" element={<Kycform />} />
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
