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
import Validations from "./Validation";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phonenumber: "",
    shopname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validations(formData);
    setFormData({ ...formData, errors });
    if (!Object.keys(errors).length) {
      apiSubmit();
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const apiSubmit = (e) => {
    axios.post("http://localhost:9090/signup", {
        email: formData.email,
        phone: parseInt(formData.phonenumber),
        shop_name:formData.shopname,
        isApprover:false,
        isRetailer:true,
        password:"xyz"
      })
      .then((res) => {
        generateOtp();
        console.log(res.data)
      })
      .catch((err) => console.error(err));
  };
  
  const generateOtp=()=>{
    axios.post("http://localhost:9090/generateotp",{
      email:formData.email,
    })
    .then((res)=>{
      navigate("/otp");
    })
  }
  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  const avatarStyle = { backgroundColor: "#0384fc" };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              style={avatarStyle}
              sx={{ m: 1, bgcolor: "secondary.main" }}
            ></Avatar>
            <h2>Sign up</h2>
          </Grid>
          <Box
            sx={{
              marginTop: 8,
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
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleChange}
                name="email"
                autoComplete="email"
                autoFocus
                error={formData?.errors?.email?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="phonenumber"
                onChange={handleChange}
                label="Phone Number"
                id="phoneNumber"
                autoComplete="phoneNumber"
                error={formData?.errors?.phonenumber?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="shopname"
                onChange={handleChange}
                label="Shop Name"
                id="shopname"
                error={formData?.errors?.shopname?.length > 0 ? true : false}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Paper>
        </form>
      </Container>
    </ThemeProvider>
  );
}
