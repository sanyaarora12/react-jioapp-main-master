import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { inputFormElements } from "./KformElement";

export default function App() {
  const margin = { margin: "0 5px" };
  return (
    <div className="App">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary">
              KYC Details
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Fill all the mandatory fields to create an account.
            </Typography>
            <form>
              <Typography variant="body2" align="left" gutterBottom>
                Kyc Info :{" "}
              </Typography>
              <Grid container spacing={1}>
                {inputFormElements.slice(0, 6).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" align="left" gutterBottom>
                Address :{" "}
              </Typography>
              <Grid container spacing={1}>
                {inputFormElements.slice(6, 10).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} align="right">
                  <Button
                    style={margin}
                    type="reset"
                    variant="outlined"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    <Link
                      to="/SuccessfulRegistration"
                      style={{ textDecoration: "none", color: "White" }}
                    >
                      Submit
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
