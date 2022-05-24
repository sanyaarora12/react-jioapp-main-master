import React from "react";
import KycStyle from "../Components/KycStyle";

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
          value={Address}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
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
