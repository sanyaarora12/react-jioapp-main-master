// import React from "react";

// export class BankDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       AccountNumber: "",
//       Accnumber: "",
//       Ifsc:""
//     };
//   }

//   render() {
//     const { AccountNumber, Accnumber,ifsc } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="email">Account Number</label>
//         <input
//           name="email"
//           type="text"
//           placeholder="Enter your Account Number"
//           value={AccountNumber}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="email">Re-enter Account Number</label>
//         <input
//           name="Accnumber"
//           type="Accnumber"
//           placeholder="Re-enter your Account number"
//           value={Accnumber}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="email">IFSC Code</label>
//         <input
//           name="email"
//           type="text"
//           placeholder="Enter your IFSC code"
//           value={ifsc}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     console.log("Submitting");
//     console.log(this.state);
//   };
// }
