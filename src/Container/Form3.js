import React from "react";
import { Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormStyles from "../Components/FormStyles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Form3() {

const paperStyle = {padding: 20,height: "70vh", width: 300, margin: "20px auto"};
  const avatarStyle = { backgroundColor: "blue" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountBoxIcon />
          </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <div className="email">
          <FormStyles />
          <input type="text" name="email" placeholder="Enter your email id" />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Enter your Phone number" />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Enter your Shop name" />
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
}

export default Form3;