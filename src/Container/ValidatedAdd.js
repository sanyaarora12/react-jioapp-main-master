import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "../Components/Button";

const ValidatedAdd = () => (
  <Formik
    initialValues={{ PinCode: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={(values) => {
      let errors = {};

      const PinCodeRegex = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
      if (!values.PinCode) {
        errors.PinCode = "Required";
      } else if (values.PinCode.length === 7) {
        errors.PinCode = "Pincode must be 6 digits only.";
      } else if (!PinCodeRegex.test(values.PinCode)) {
        errors.PinCode = "Invalid PinCode ";
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

          <h1>Address Verification</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="number">PinCode</label>
              <br />
              <input
                id="placeholder"
                name="PinCode"
                type="number"
                placeholder="Enter your PinCode"
                value={values.PinCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.PinCode && touched.PinCode && "error"}
                required
              />
              {errors.PinCode && touched.PinCode && (
                <div className="input-feedback">{errors.PinCode}</div>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              <Link
                to="/validatedbankdetail"
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

export default ValidatedAdd;
