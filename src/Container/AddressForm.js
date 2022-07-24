import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ValidatedAddress from "./ValidatedAddress";
import axios from "axios";

const theme = createTheme();

export default function Address() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    addressLine: "",
    state: "",
    city: "",
    zipcode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = ValidatedAddress(formData);
    setFormData({ ...formData, errors });
    if (!Object.keys(errors).length) {
      apiSubmit();
    }
  };

  const apiSubmit = (e) => {
    axios
      .post("http://localhost:9090/addressOnboard", {
        // addressLine:formData.addressLine,
        // state:formData.state,
        // city:formData.city,
        // zipcode:formData.zipcode
        addressLine: "",
        state: "",
        city: "",
        zipcode: "",
      })
      .then((res) => {
        navigate("/successfulregistration");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(e);
  };

  console.log(formData);
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 500,
    marginLeft: "-50px",
  };
  const avatarStyle = { backgroundColor: "#0384fc" };
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  let country = [...new Set(data.map((item) => item.country))];
  country.sort();

  const handleCountryChange = (e) => {
    setState("Select State");
    setCity("Select City");

    let Singlecountry = data.filter((item) => item.country === e.target.value);

    let states = [...new Set(Singlecountry.map((item) => item.subcountry))];

    setState(states);
  };

  const handleStateChange = (e) => {
    let singleCity = data.filter((item) => item.subcountry === e.target.value);
    setCity(singleCity);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" align="center">
        <CssBaseline />
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar
              style={avatarStyle}
              sx={{ m: 1, bgcolor: "secondary.main" }}
            ></Avatar>
            <h2>Address</h2>
          </Grid>
          <Box
            sx={{
              marginTop: 4,
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
                id="line1"
                fullWidth
                label="Address line1"
                onChange={handleChange}
                name="line1"
                autoFocus
                error={formData?.errors?.line1?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="city"
                onChange={handleChange}
                label="city"
                id="city"
                autoComplete="city"
                error={formData?.errors?.city?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="state"
                onChange={handleChange}
                label="state"
                id="state"
                error={formData?.errors?.state?.length > 0 ? true : false}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="zip"
                onChange={handleChange}
                label="Zip Code"
                id="zip"
                error={formData?.errors?.zip?.length > 0 ? true : false}
              />
              {/* <Grid>
                <label>Country: </label>
                <select onChange={(e) => handleCountryChange(e)}>
                  <option>Select Country</option>
                  {country?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <label>State: </label>
                <select onChange={(e) => handleStateChange(e)}>
                  <option>Select State</option>
                  {state !== "Select State" &&
                    state?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>

                <label>City: </label>
                <select>
                  <option>Select City</option>
                  {city !== "Select City" &&
                    city?.map((item, index) => (
                      <option key={index} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                </select>
              </Grid> */}

              <Button
                type="submit"
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
