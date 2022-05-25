import React from "react";
import { Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Form3 = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <div>
          <TextField
            label="Enter your email id"
            placeholder="Email"
            fullWidth
            required
          />
        </div>
        <br />
        <div>
          <TextField
            label="Enter your Phone number"
            placeholder="Phone number"
            fullWidth
            required
          />
        </div>
        <br />
        <div>
          <TextField
            label="Shop Name"
            placeholder="Shop Name"
            fullWidth
            required
          />
        </div>
        <br />
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
};

export default Form3;
