import React from "react";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { inputFormElements } from "./KformElement";

const paperStyle = {
  padding: 20,
  height: "130vh",
  width: 700,
  margin: "20px auto",
};

export default function App() {
  const margin = { margin: "0 5px" };
  const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("userdetails");
    navigate("/SuccessfulRegistration");
    console.log({ data });
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // add data to localStorage

  return (
    <div className="App">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Paper elevation={10} style={paperStyle}>
          <Card style={{ maxWidth: 600, margin: "0 auto" }}>
            <CardContent>
              <Typography variant="h4" color="primary">
                KYC Details
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Fill all the mandatory fields to create an account.
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="body2" align="left" gutterBottom>
                  Kyc Info :{" "}
                </Typography>
                <Grid container spacing={1}>
                  {inputFormElements(register, errors)
                    .slice(0, 9)
                    .map((input) => (
                      <Grid xs={input.xs} sm={input.sm} item>
                        <TextField
                          {...input}
                          {...register(
                            input.name,

                            { ...input }
                          )}
                        />
                      </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" align="left" gutterBottom>
                  Address :{" "}
                </Typography>
                <Grid container spacing={1}>
                  {inputFormElements(register, errors)
                    .slice(9, 13)
                    .map((input) => (
                      <Grid xs={input.xs} sm={input.sm} item>
                        <TextField
                          {...input}
                          {...register(input.name, { ...input })}
                        />
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
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </div>
  );
}
