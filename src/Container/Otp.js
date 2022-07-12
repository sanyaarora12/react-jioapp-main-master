import React from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import OtpStyle from "../Components/OtpStyle";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Otp() {
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const handleChange = (code) => setCode(code);

  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigate("/KycForm");
    console.log({ data });
  };

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 500,
    margin: "20px auto",
  };

  return (
    <>
      <OtpStyle />
      <Paper elevation={10} style={paperStyle}>
        <div className="container">
          <h3>
            Otp has been sent successfully.
            <br /> Please enter the same OTP below{" "}
          </h3>
          <OtpInput
            value={code}
            onChange={handleChange}
            onSubmit={handleSubmit(onSubmit)}
            numInputs={6}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            required={true}
            inputStyle={{
              boxShadow: "1px 3px 1px #0384fc",
              border: "1px ",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #0384fc",
              outline: "none",
            }}
          />
          <br />
          <br />
          <br />
          <Button type="submit" color="primary" variant="contained">
            <Link
              to="/KycForm"
              style={{ textDecoration: "none", color: "White" }}
            >
              SUBMIT
            </Link>
          </Button>
          <br />
          <Button type="submit" color="primary" variant="contained">
            <Link
              to="/roughform"
              style={{ textDecoration: "none", color: "White" }}
            >
              Resend OTP
            </Link>
          </Button>
        </div>
      </Paper>
    </>
  );
}
