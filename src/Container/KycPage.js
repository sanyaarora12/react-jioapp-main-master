import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
export default function KycPage() {
  return (
    <div>
      <Button />

      <h1>Personal Details</h1>
      <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-3">
          <br />
          <label for="validationCustom01" class="form-label">
            PAN Card Number
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            <Link to="/validatedbankdetails"
            style={{ textDecoration: "none", color: "White" }}>
              Submit form
              </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
