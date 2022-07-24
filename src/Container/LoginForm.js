import { useState, useEffect } from "react";
import { Container, Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    navigate('/')
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },);

 
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  const avatarStyle = { backgroundColor: "#0384fc" };

  return (
    <div className="container">
     <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh", marginLeft: "100px" }}
        >
          <Paper elevation={10} style={paperStyle}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Avatar
                    style={avatarStyle}
                    sx={{
                      m: 1,
                      bgcolor: "secondary.main",
                      marginLeft: "150px",
                    }}
                  ></Avatar>
                  <h2 style={{ marginLeft: "120px" }}>Sign In</h2>
                  <div className="field">
            <TextField
            type="email"
            fullWidth
            label="Enter your email"
            placeholder="Email Address"
            variant="outlined"
            required
              name="email"
              style={{ marginTop: "40px",width:"300px" }}
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
                </Grid>

                <Grid item>
                <div className="field">
            <TextField
              fullWidth
              label="Password"
              placeholder="Password"
              variant="outlined"
              required
              type="password"
              name="password"
              style={{ marginTop: "-30px",width:"300px" }}
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
                  
                </Grid>

                <Grid item>
                  <Button  type="submit" fullWidth variant="contained" style={{width:"300px",marginLeft:"20px"}}>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
        </div>
      
  );
}

export default LoginForm;