import React from "react";

export class KycPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PanNumber: "",
    };
  }

  render() {
    const { PanNumber } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pan Number</label>
        <input
          name="text"
          type="text"
          placeholder="Enter your pan number"
          value={PanNumber}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
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
