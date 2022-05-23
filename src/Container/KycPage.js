import React from "react";
import Button from "../Components/Button";
export default function KycPage() {
  // const pancardValidation = (text) => {
  //   let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  //   if (regex.test(text)) {
  //     return true;
  //   }

  //   return false;
  // };
  //   constructor(props);
  //   super(props);
  //   this.state = {
  //     image: null,
  //   };
  //   this.onImageChange = this.onImageChange.bind(this);
  // }

  // onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  // }
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
          {/* <input name="txtPANCard" type="text" id="txtPANCard" class="PAN" />
          <span id="lblPANCard" class="error">
            Invalid PAN Number
          </span>
          <hr />
          <input
            type="button"
            id="btnSubmit"
            value="Submit"
            onclick="ValidatePAN()"
          />
          <div>
            <div>
              <div>
                {/* <img src={this.state.image} /> */}
          {/* <h1>Select Image</h1>
                <input
                  type="file"
                  name="myImage"
                  onChange={this.onImageChange}
                />
              </div>
            </div>
          </div> */}{" "}
          <div class="col-md-20">
            <label for="validationCustom02" class="form-label">
              Aadhar Number
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
