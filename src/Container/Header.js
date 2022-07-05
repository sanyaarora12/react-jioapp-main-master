import React from "react";
import { Link } from "react-router-dom";
import GlobalStyles from "../Components/Global";
import HomeStyles from "../Components/HomeStyles";
import * as EmailValidator from "email-validator";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Header() {
  return (
    <header>
      <HomeStyles />
      <GlobalStyles />
      <div className="App">
        <div>
          <h1 style={{color: "Black" }}>Welcome</h1>
          <h2>Become a JIO Associate and start earning now!</h2>
          <Formik
    initialValues={{ email: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    validate={(values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }


      return errors;
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required")
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email"><strong>Enter Your Email id</strong></label>
              <br />
              <input
                id="placeholder"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                required
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
          
            <br />
            <button type="submit" disabled={isSubmitting}>
              <Link
                to="/otp"
                style={{ textDecoration: "none", color: "White" }}
              >
                Login
              </Link>
            </button>
          </form>
        </>
      );
    }}
  </Formik>
        </div>
      </div>
    </header>
  );
}
