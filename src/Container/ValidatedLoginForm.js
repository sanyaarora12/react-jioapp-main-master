import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import Button from "../Components/Button";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", Phonenumber: "", shopname: "" }}
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

      const PhonenumberRegex = /(?=.*[0-10])/;
      if (!values.Phonenumber) {
        errors.Phonenumber = "Required";
      } else if (values.Phonenumber.length === 11) {
        errors.Phonenumber = "Phone number must be 10 digits only.";
      } else if (!PhonenumberRegex.test(values.Phonenumber)) {
        errors.Phonenumber = "Invalida Phonenumber. Must contain one number";
      }

      if (!values.shopname) {
        errors.shopname = "Required";
      } else if (values.shopname === "text") {
        errors.shopname = "Invalid shopname";
      }

      return errors;
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      Phonenumber: Yup.string()
        .required("No Phonenumber provided.")
        .min(8, "Phonenumber is too short - should be 10 digits minimum.")
        .matches(/(?=.*[0-9])/, "Phonenumber must contain a number."),
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
          <Button />
          <h1>Register to Jio Mart Digital</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
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
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Phone Number</label>
              <br />
              <input
                id="placeholder"
                name="Phonenumber"
                type="Phonenumber"
                placeholder="Enter your Phone number"
                value={values.Phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.Phonenumber && touched.Phonenumber && "error"}
              />
              {errors.Phonenumber && touched.Phonenumber && (
                <div className="input-feedback">{errors.Phonenumber}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Shop Name</label>
              <br />
              <input
                id="placeholder"
                name="shopname"
                type="shopname"
                placeholder="Enter your Shop Name"
                value={values.shopname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.shopname && touched.shopname && "error"}
              />
              {errors.shopname && touched.shopname && (
                <div className="input-feedback">{errors.shopname}</div>
              )}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
           
            {/* <label>Shop name</label>
          <input type="text" placeholder="Enter your shop name"/> */}
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
);

export default ValidatedLoginForm;
