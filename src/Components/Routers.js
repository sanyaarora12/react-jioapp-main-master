import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Otp from "../Container/Otp";
import SuccessfulRegistration from "../Container/SuccessfulRegistration";
import Form from "../Container/Form";
import Kycform from "../Container/KycForm";
import RoughForm from "../Container/RoughForm";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/roughform" element={<RoughForm />} />
          <Route exact path="/form" element={<Form />} />

          <Route path="/otp" element={<Otp />} />
          <Route path="/Kycform" element={<Kycform />} />

          <Route
            path="/successfulregistration"
            element={<SuccessfulRegistration />}
          />
        </Routes>
      </Router>
    </div>
  );
}
