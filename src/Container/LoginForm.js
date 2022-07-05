import React from "react";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Phonenumber: "",
      shopname:""
    };
  }

  render() {
    const { email, Phonenumber,shopname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Phone number</label>
        <input
          name="Phone number"
          type="Phonenumber"
          placeholder="Enter your Phone number"
          value={Phonenumber}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Shop Name</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your Shop name"
          value={shopname}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };
}



