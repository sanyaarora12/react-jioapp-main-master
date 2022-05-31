import React from "react";
import { Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { TextField } from "@mui/material";

const validEmailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const paperStyle = {
  padding: 20,
  height: "80vh",
  width: 300,
  margin: "20px auto",
};
const avatarStyle = { backgroundColor: "#0384fc" };

export default class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      phonenumber: null,
      errors: {
        email: "",
        phonenumber: "",
        shopname: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "phonenumber":
        errors.phonenumber =
          value.length < 10
            ? "phonenumber must be at least 10 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              style={avatarStyle}
              sx={{ m: 1, bgcolor: "secondary.main" }}
            >
              <AccountBoxIcon />
            </Avatar>
            <h2>Sign up</h2>
          </Grid>
          <div className="wrapper">
            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                  <TextField
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    noValidate
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="phonenumber">
                  <TextField
                    type="phonenumber"
                    name="phonenumber"
                    onChange={this.handleChange}
                    margin="normal"
                    required
                    fullWidth
                    id="Phonenumber"
                    label="Phone number"
                    autoComplete="Phone number"
                    autoFocus
                    noValidate
                  />
                  {errors.phonenumber.length > 0 && (
                    <span className="error">{errors.phonenumber}</span>
                  )}
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="shopname"
                  label="Shop name"
                  name="Shop name"
                  autoComplete="Shop name"
                  autoFocus
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Agree to terms and conditions"
                />
                <br />
                <div className="submit">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    <Link
                      to="/otp"
                      style={{ textDecoration: "none", color: "White" }}
                    >
                      Submit
                    </Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Paper>
      </Grid>
    );
  }
}
