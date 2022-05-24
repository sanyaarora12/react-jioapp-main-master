import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "../Components/Button";

const ValidatedKyc = () => (
  <Formik
    initialValues={{ PanNumber: "", Adhaarnumber: "", GSTNumber: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    validate={(values) => {
      let errors = {};

      const PanNumberRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      if (!values.PanNumber) {
        errors.PanNumber = "Required";
      } else if (values.PanNumber.length === 11) {
        errors.PanNumber = "Pan number must be 10 characters only.";
      }
      const AdhaarnumberRegex = /^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
      if (!values.Adhaarnumber) {
        errors.Adhaarnumber = "Required";
      } else if (values.Adhaarumber.length === 13) {
        errors.Adhaarumber = "Adhaar number must be 12 characters only.";
      }
      const GSTNumberRegex =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      if (!values.GSTNumber) {
        errors.GSTNumber = "Required";
      } else if (values.GSTNumber.length === 16) {
        errors.GSTNumber = "GST number must be 15 characters only.";
      }

      return errors;
    }}
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

          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text">Pan Number</label>
              <br />
              <input
                id="placeholder"
                name="PanNumber"
                type="PanNumber"
                placeholder="Enter your Pan number"
                value={values.PanNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.PanNumber && touched.PanNumber && "error"}
                required
              />
              {errors.PanNumber && touched.PanNumber && (
                <div className="input-feedback">{errors.PanNumber}</div>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="number">Adhaar Number</label>
              <br />
              <input
                id="placeholder"
                name="Adhaarnumber"
                type="Adhaarnumber"
                placeholder="Enter your Account number"
                value={values.Adhaarnumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.Adhaarnumber && touched.Adhaarnumber && "error"
                }
                required
              />
              {errors.Adhaarnumber && touched.Adhaarnumber && (
                <div className="input-feedback">{errors.Adhaarnumber}</div>
              )}
            </div>

            <br />
            <div>
              <label htmlFor="text">Pan Number</label>
              <br />
              <input
                id="placeholder"
                name="GSTNumber"
                type="GSTNumber"
                placeholder="Enter your Pan number"
                value={values.GSTNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.GSTNumber && touched.GSTNumber && "error"}
                required
              />
              {errors.GSTNumber && touched.GSTNumber && (
                <div className="input-feedback">{errors.GSTNumber}</div>
              )}
            </div>
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
            <button type="submit" disabled={isSubmitting}>
              <Link
                to="/validatedbankdetails"
                style={{ textDecoration: "none", color: "White" }}
              >
                Submit
              </Link>
            </button>
          </form>
        </>
      );
    }}
  </Formik>
);

export default ValidatedKyc;
