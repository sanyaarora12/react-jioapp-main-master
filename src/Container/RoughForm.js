import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormErrors } from './FormErrors';
import { Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import RoughFormStyles from '../Components/RoughFormStyles';

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      Phonenumber: '',
      formErrors: {email: '', Phonenumber: ''},
      emailValid: false,
      PhonenumberValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let PhonenumberValid = this.state.PhonenumberValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'Phonenumber':
        PhonenumberValid = value.length >= 6;
        fieldValidationErrors.Phonenumber = PhonenumberValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    PhonenumberValid: PhonenumberValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.PhonenumberValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  

  render () {
    const paperStyle = {padding: 20,height: "70vh", width: 300, margin: "20px auto"};
  const avatarStyle = { backgroundColor: "blue" };
      
    return (
      <Grid>
      <form>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountBoxIcon />
          </Avatar>
          <h2>Sign up</h2>
        </Grid>
        <RoughFormStyles />
        <div className="email">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <br />
          <input type="text" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput} 
             />
        </div>
        
        <div className={`form-group ${this.errorClass(this.state.formErrors.Phonenumber)}`}>
          <label htmlFor="Phonenumber">Phone number</label>
          <br/>
          <input type="text" className="form-control" name="Phonenumber"
            placeholder="Phone number"
            value={this.state.Phonenumber}
            onChange={this.handleUserInput}  /> 
        </div>
        <br />
        <Button type="submit" color="primary" variant="contained" disabled={!this.state.formValid} fullWidth>
          <Link to="/otp" style={{ textDecoration: "none", color: "White" }}>
            Submit
          </Link>
        </Button>
        </Paper>
      </form>
      </Grid>
    )
  }
}

export default Form;