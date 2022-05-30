import React from "react";
import { Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormStyles from "../Components/FormStyles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function Form3() {
  const {
    handleSubmit,
    onSubmit,
    // formState: { errors },
  } = useForm();
      
const paperStyle = {padding: 20,height: "70vh", width: 300, margin: "20px auto"};
  const avatarStyle = { backgroundColor: "#0384fc" };
  return (
    <Grid onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountBoxIcon />
          </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <div className="email">
          <FormStyles />
          <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Phonenumber"
                  label="Phone number"
                  name="Phone number"
                  autoComplete="Phone number"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Phonenumber"
                  label="Shop name"
                  name="Shop name"
                  autoComplete="Shop name"
                  autoFocus
                />
                </div>
        <FormControlLabel
          control={<Checkbox />}
          label="Agree to terms and conditions"
        />
        <br />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          <Link to="/otp" style={{ textDecoration: "none", color: "White" }}>
            Submit
          </Link>
        </Button>
      </Paper>
    </Grid>
  );
}

export default Form3;