import React from "react";
import { Link } from "react-router-dom";
import OtpStyle from "../Components/OtpStyle";

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
      </div>
    </>
  );
}
