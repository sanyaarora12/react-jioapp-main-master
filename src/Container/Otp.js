import React from "react";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import OtpStyle from "../Components/OtpStyle";
<<<<<<< HEAD

export default function Otp() {
  // function clickEvent(first,last){
  //     if(first.value.length){
  //         document.getElementById(last).focus();
  //     }

  // };
  return (
    <div>
      <OtpStyle />
      <div className="container">
        <h2>
          Otp has been sent successfully. <br /> please enter the same OTP below
        </h2>
        <br />
        <div class="hstack gap-3">
          <input
            type="text"
            id="sec"
            maxLength="1"
            onkeyup="clickEvent(this,'sec')"
          ></input>
          <input
            type="text"
            id="sec"
            maxLength="1"
            onkeyup="clickEvent(this, 'third')"
          ></input>
          <input
            type="text"
            id="sec"
            maxLength="1"
            onkeyup="clickEvent(this, 'fourth')"
          ></input>
          <input
            type="text"
            id="sec"
            maxLength="1"
            onkeyup="clickEvent(this, 'fifth')"
          ></input>
          <input type="text" id="sec" maxLength="1"></input>
        </div>
        <br />

        <button type="button" className="btn btn-primary btn-lg">
          <Link
            to="/kycpage"
            id="submit"
=======
import { useState } from "react";

export default function Otp() {
  const [code, setCode] = useState("");
  const handleChange = (code) => setCode(code);

  return (
    <>
      <OtpStyle />
      <div className="container">
        <h3>
          Otp has been sent successfully.
          <br /> Please enter the same OTP below{" "}
        </h3>
        <OtpInput
          value={code}
          onChange={handleChange}
          numInputs={6}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            boxShadow: "1px 3px 1px blue",
            border: "1px solid transparent ",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        />
        <br />
        <br />
        <br />
        <button type="button" className="btn btn-primary btn-lg">
          <Link
            to="/KycPage"
>>>>>>> c16dc748581a2831b2f0cac3d3736ff4f3552651
            style={{ textDecoration: "none", color: "White" }}
          >
            Submit
          </Link>
        </button>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> c16dc748581a2831b2f0cac3d3736ff4f3552651
  );
}
