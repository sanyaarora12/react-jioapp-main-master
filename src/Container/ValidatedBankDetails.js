import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Components/Button";

const ValidatedBankDetails = () => (
  <Formik
    initialValues={{ AccountNumber: "", AccNumber: "", Ifsc: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    validate={(values) => {
      let errors = {};

      const AccountNumberRegex = /(?=.*[0-10])/;
      if (!values.AccountNumber) {
        errors.AccountNumber = "Required";
      } else if (values.AccountNumber.length === 11) {
        errors.AccountNumber = "Phone number must be 10 digits only.";
      }

      const AccNumberRegex = /(?=.*[0-10])/;
      if (!values.AccNumber) {
        errors.AccNumber = "Required";
      } else if (values.AccNumber.length === 11) {
        errors.AccNumber = "Phone number must be 10 digits only.";
      } else if (!AccNumberRegex.test(values.AccNumber)) {
        errors.AccNumber = "Invalid account number must contain one number";
      } else if (AccNumberRegex === AccountNumberRegex) {
        errors.AccNumber = "Your Account numbers do not match";
      }

      if (!values.Ifsc) {
        errors.Ifsc = "Required";
      } else if (values.Ifsc === "text") {
        errors.Ifsc = "Invalid Ifsc";
      }

      return errors;
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      AccNumber: Yup.string()
        .required("No AccNumber provided.")
        .min(8, "AccNumber is too short - should be 10 digits minimum.")
        .matches(/(?=.*[0-9])/, "AccNumber must contain a number."),
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
          <h1>Bank Details</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Account Number</label>
              <br />
              <input
                id="placeholder"
                name="AccountNumber"
                type="AccountNumber"
                placeholder="Enter your Account number"
                value={values.AccountNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.AccountNumber && touched.AccountNumber && "error"
                }
                required
              />
              {errors.AccountNumber && touched.AccountNumber && (
                <div className="input-feedback">{errors.AccountNumber}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Re-enter Account Number</label>
              <br />
              <input
                id="placeholder"
                name="AccNumber"
                type="AccNumber"
                placeholder="Enter your Account number"
                value={values.AccNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.AccNumber && touched.AccNumber && "error"}
                required
              />
              {errors.AccNumber && touched.AccNumber && (
                <div className="input-feedback">{errors.AccNumber}</div>
              )}
            </div>
            <br />
            <div class="mb-3" id="dropdown">
            <select class="form-select" required aria-label="select example">
            <option value="">Select your Bank Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">Example invalid select feedback</div>
            </div>
            <div>
              <label htmlFor="email">IFSC Code</label>
              <br />
              <input
                id="placeholder"
                name="Ifsc"
                type="Ifsc"
                placeholder="Enter your IFSC Code"
                value={values.Ifsc}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.Ifsc && touched.Ifsc && "error"}
                required
              />
              {errors.Ifsc && touched.Ifsc && (
                <div className="input-feedback">{errors.Ifsc}</div>
              )}

              <div class="mb-3" id="a">
                <label for="formFileSm" class="form-label">
                  Upload Cancelled Cheque
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  required
                />
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
            </div>
            <br />
            <button type="submit" disabled={isSubmitting}>
              <Link to="/" style={{ textDecoration: "none", color: "White" }}>
                Submit
              </Link>
            </button>
          </form>
        </>
      );
    }}
  </Formik>
);

export default ValidatedBankDetails;
