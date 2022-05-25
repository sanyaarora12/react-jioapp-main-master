import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function FormPropsTextFields() {
  return (
    <>
      <div id="box1">
        <div className="h1">
          <h1>Sign Up</h1>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "500px" },
          }}
          Validate
          autoComplete="off"
          required
        >
          <div id="box">
            <TextField
              required
              label="Enter your email id"
              id="outlined-required"
            />
            <br />
            <TextField
              id="outlined-password-input"
              label="Enter your Phone Number"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <TextField
              id="outlined-password-input"
              label="Enter your Shop Name"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <Button variant="contained" id="btn" endIcon={<SendIcon />}>
              Get OTP
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
