// import { TextField } from "@mui/material";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Grid, Paper } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// class RoughForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       emailId: "",
//       phoneNumber: "",
//       formErrors: {},
//     };

//     this.initialState = this.state;
//   }

//   handleFormValidation() {
//     const { emailId, phoneNumber } = this.state;
//     let formErrors = {};
//     let formIsValid = true;

//     //Email
//     if (!emailId) {
//       formIsValid = false;
//       formErrors["emailIdErr"] = "Email id is required.";
//     } else if (
//       !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(emailId)
//     ) {
//       formIsValid = false;
//       formErrors["emailIdErr"] = "Invalid email id.";
//     }

//     //Phone number
//     if (!phoneNumber) {
//       formIsValid = false;
//       formErrors["phoneNumberErr"] = "Phone number is required.";
//     } else {
//       var mobPattern = /(?=.*[0-10])/;
//       if (!mobPattern.test(phoneNumber)) {
//         formIsValid = false;
//         formErrors["phoneNumberErr"] = "Invalid phone number.";
//       }
//     }

//     this.setState({ formErrors: formErrors });
//     return formIsValid;
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
    
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (this.handleFormValidation()) {
//       this.setState(this.initialState);
//     }
//   };

//   render() {
//     const { emailIdErr, phoneNumberErr } = this.state.formErrors;
//     const paperStyle = {padding: 20,height: "80vh", width: 300, margin: "20px auto"};
//     const avatarStyle = { backgroundColor: "#0384fc" };
    
//     console.log(this.state);
//     return (
//       <Grid>
//         <Paper elevation={10} style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <AccountBoxIcon />
//           </Avatar>
//           <h2>Sign up</h2>
//         </Grid>
//       <div className="formDiv">
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <div>
//             <TextField 
//               type='email'
//               name='emailId'
//                onChange={this.handleChange}
//                margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   autoComplete="email"
//                   value={this.state.emailId}
//                   className={emailIdErr ? " showError" : ""}
//                   autoFocus
//                  noValidate />
//                  {emailIdErr && (
//                 <div style={{ color: "red", paddingBottom: 10 }}>
//                   {emailIdErr}
//                 </div>
//               )}
//             </div>

//             <div>
//             <TextField 
//               type='phoneNumber' 
//               name='phoneNumber'
//               onChange={this.handleChange}
//               margin="normal"
//                   required
//                   fullWidth
//                   id="phoneNumber"
//                   label="Phone number"
//                   autoComplete="Phone number"
//                   value={this.state.phoneNumber}
//                   autoFocus
//                noValidate />
//               {phoneNumberErr && (
//                 <div style={{ color: "red", paddingBottom: 10 }}>
//                   {phoneNumberErr}
//                 </div>
//               )}
//             </div>
//             <FormControlLabel
//           control={<Checkbox />}
//           label="Agree to terms and conditions"
//         />
    
//             <Button type="submit" color="primary" variant="contained" fullWidth >
//               < Link to="/otp" style={{ textDecoration: "none", color: "White" }}>
//             Submit
//             </Link>
//               </Button>
//           </form>
//         </div>
//       </div>
//       </Paper>
//       </Grid>
      
//     );
//   }
// }

// export default RoughForm;
import * as React from 'react';
import { useForm } from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Grid, Paper } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  // const onSubmit = (data) => {
  //   console.log({ data });
  // };
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
    });
  };

  const paperStyle = {padding: 20,height: "100vh", width: 400};
   const avatarStyle = { backgroundColor: "#0384fc" };

  return (
    <form>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
           <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountBoxIcon />
           </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="phoneNumber"
              type="number"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="Shop Name"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Link to="/otp" style={{ textDecoration: "none", color: "White" }}>
              SUBMIT
              </Link>
            </Button>
            
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Paper>
      </Container>
    </ThemeProvider>
    </form>
  );
}