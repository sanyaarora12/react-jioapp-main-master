import { Container, Button, Grid, Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../Components/auth';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });
  
  //  useEffect(()=>{
  //   if(localStorage.getItem("token")){
  //     navigate("/approval");
  //   }
  //  },[])

  const [user,setUser]=useState('')
  const auth=useAuth()

  const handleLogin=()=>{
    auth.login(user)
    navigate('/approval',{replace:true})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://mocki.io/v1/4120a0dc-b11b-4f11-a602-569140878fd6", {
        email: values.email,
        password: values.pass,
        
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/approval");
      })
      .catch((err) => console.error(err));
  };


  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  const avatarStyle = { backgroundColor: "#0384fc" };

  return (
    <div>
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
                  <TextField
                    type="email"
                    fullWidth
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    required
                    style={{ marginTop: "80px" }}
                    // onChange={(e) =>
                    //   setValues({ ...values, email: e.target.value })
                    // }
                    onChange={(e)=>setUser(e.target.value)}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, pass: e.target.value })
                    }
                  />
                  
                </Grid>

                <Grid item>
                  <Button onClick={handleLogin} type="submit" fullWidth variant="contained">
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
};

export default Login;
