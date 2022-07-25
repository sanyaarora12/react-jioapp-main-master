import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ValidatedBankDetails from "./ValidatedBankDetails";
import axios from "axios";

const theme = createTheme();

export default function Kyc() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    aadharNumber: "",
    panNumber: "",
    ifscCode: "",
    gstNumber: "",
    accountNumber: "",
    confirmAccountNumber: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = ValidatedBankDetails(formData);
    setFormData({ ...formData, errors });
    if (!Object.keys(errors).length) {
      apiSubmit();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(e);
  };

  const apiSubmit = (e) => {
    console.log("came here");
    axios
      .post("http://localhost:9090/retailOnboard", {
        aadharNumber: "",
        panNumber: "",
        ifscCode: "",
        gstNumber: "",
        accountNumber: "",
        confirmAccountNumber: "",
      })
      .then((res) => {
        navigate("/addressform");
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    marginLeft: "-50px",
  };
  const avatarStyle = { backgroundColor: "#0384fc" };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" align="center">
        <CssBaseline />
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              style={avatarStyle}
              sx={{ m: 1, bgcolor: "secondary.main" }}
            ></Avatar>
            <h2>KYC Details</h2>
          </Grid>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                id="pan"
                fullWidth
                label="Pan Number"
                onChange={handleChange}
                name="pan"
                autoComplete="PanNumber"
                autoFocus
                error={formData?.errors?.pan?.length > 0 ? true : false}
                // helperText={
                //   formData?.errors?.pan ? formData?.errors.pan.message : null
                // }
              />

              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                id="panimg"
                label="Pan image"
                name="panimg"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="aadhar"
                onChange={handleChange}
                label="Aadhar Number"
                id="aadhar"
                autoComplete="aadhar"
                error={formData?.errors?.aadhar?.length > 0 ? true : false}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                id="aadharfront"
                label="Aadhar Card front"
                name="aadharfront"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                id="aadharback"
                label="Aadhar Card back"
                name="aadharback"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="gst"
                onChange={handleChange}
                label="GST Number"
                id="gst"
                autoComplete="GSTNumber"
                error={formData?.errors?.gst?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="acc"
                onChange={handleChange}
                label="Account Number"
                id="acc"
                autoComplete="accNumber"
                error={formData?.errors?.acc?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="acc2"
                onChange={handleChange}
                label="Confirm Account Number"
                id="acc2"
                autoComplete="acc2"
                error={formData?.errors?.acc2?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="ifsc"
                onChange={handleChange}
                label="IFSC Code"
                id="ifsc"
                error={formData?.errors?.ifsc?.length > 0 ? true : false}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                id="chqimg"
                label="Cancelled Cheque"
                name="chqimg"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
