import React from "react";
import KycStyle from "../Components/KycStyle";
import { Link } from "react-router-dom";

export class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PinCode: "",
      Address: "",
    };
  }

  render() {
    const { PinCode, Address } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <KycStyle />
        <h1>Address Verification</h1>
        <br />
        <br />
        <label htmlFor="number">PinCode</label>
        <input
          name="PinCode"
          type="number"
          placeholder="Enter your PinCode"
          required="true"
          value={PinCode}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label htmlFor="email">Address</label>
        <input
          name="Address"
          type="Address"
          placeholder="Enter your Address"
          required="true"
          value={Address}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <div class="mb-3" id="a">
          <label for="formFileSm" class="form-label">
            Upload Address Proof
          </label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
            required
          />
        </div>
        <br />
        <button type="submit">
          <Link
            to="/validatedbankdetails"
            style={{ textDecoration: "none", color: "White" }}
          >
            Submit
          </Link>
        </button>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("Submitting");
    console.log(this.state);
  };
}
export default Address;
