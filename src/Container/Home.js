// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Grid, Paper } from "@mui/material";
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';

// const paperStyle = {padding: 20,height: "90vh", width: 400};
//    const avatarStyle = { backgroundColor: "#0384fc" };

   

// const theme = createTheme();


// export default function SignIn() {
//   const navigate= useNavigate();

//   const[loginInfo,setLoginInfo]=React.useState({username:"",password:""})

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//       navigate("/approval")
    
    
//     const data = new FormData(event.currentTarget);
//     console.log({
//       username: data.get('username'),
//       password: data.get('password'),
//     });
//   };
 
//   const handleChange=(e)=>{
//     const{ name,value}=e.target;
//     setLoginInfo({...loginInfo,[name]:value});
//   }
  

//   return (
    
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Paper elevation={10} style={paperStyle}>
//         <Grid align="center">
//            <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            
//            </Avatar>
//           <h2>Sign in</h2>
//         </Grid>
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Username"
//               name="username"
//               onChange={handleChange}
//               autoComplete="username"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               onChange={handleChange}
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
           
//           </Box>
//         </Box>
//         </Paper>
//       </Container>
//     </ThemeProvider>
   
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Validations from './Validation';

const theme = createTheme();

export default function SignUp() {

  let navigate = useNavigate();
  const [formData, setFormData] = useState({email:"",phonenumber:"",shopname:""});
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = Validations(formData)
    setFormData({...formData,errors})
    if(!Object.keys(errors).length){
      navigate("/approval")
      
    }
    
  };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
    console.log(e);
  };

  console.log(formData);
  const paperStyle = {padding: 20,height: "90vh", width: 400};
  const avatarStyle = { backgroundColor: "#0384fc" };
  
  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
           <Avatar style={avatarStyle} sx={{ m: 1, bgcolor: "secondary.main" }}>
            
           </Avatar>
          <h2>Sign In</h2>
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
              onChange={handleChange}
              name="email"
              autoComplete="email"
              autoFocus
              error={formData?.errors?.email?.length>0?true : false}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phonenumber"
              onChange={handleChange}
              label="Phone Number"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
              error={formData?.errors?.phonenumber?.length>0?true : false}

            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="shopname"
              onChange={handleChange}
              label="Password"
              id="shopname"
              autoComplete="current-phoneNumber"
              type="password"
              error={formData?.errors?.shopname?.length>0?true : false}
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
      </Container>
    </ThemeProvider>
    
  );
}