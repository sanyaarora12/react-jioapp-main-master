// import React from "react";
// import KycStyle from "../Components/KycStyle";
// import { Link } from "react-router-dom";

// export class Address extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       PinCode: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       City: "",
//     };
//   }

//   render() {
//     const { PinCode, AddressLine1, AddressLine2, City } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <KycStyle />
//         <div>
//           <h1>Address Verification</h1>
//           <br />
//           <br />
//           <label>PinCode</label>
//           <input
//             name="PinCode"
//             type="number"
//             maxlength="6"
//             placeholder="Enter your PinCode"
//             value={PinCode}
//             onChange={this.handleChange}
//             required
//           />
//           <br />
//           <br />
//           <div class="mb-3" id="dropdown">
//             <select class="form-select" required aria-label="select example">
//               <option value="">Select State</option>
//               <option value="Andhra Pradesh">Andhra Pradesh</option>
//               <option value="Andaman and Nicobar Islands">
//                 Andaman and Nicobar Islands
//               </option>
//               <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//               <option value="Assam">Assam</option>
//               <option value="Bihar">Bihar</option>
//               <option value="Chandigarh">Chandigarh</option>
//               <option value="Chhattisgarh">Chhattisgarh</option>
//               <option value="Dadar and Nagar Haveli">
//                 Dadar and Nagar Haveli
//               </option>
//               <option value="Daman and Diu">Daman and Diu</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Lakshadweep">Lakshadweep</option>
//               <option value="Puducherry">Puducherry</option>
//               <option value="Goa">Goa</option>
//               <option value="Gujarat">Gujarat</option>
//               <option value="Haryana">Haryana</option>
//               <option value="Himachal Pradesh">Himachal Pradesh</option>
//               <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//               <option value="Jharkhand">Jharkhand</option>
//               <option value="Karnataka">Karnataka</option>
//               <option value="Kerala">Kerala</option>
//               <option value="Madhya Pradesh">Madhya Pradesh</option>
//               <option value="Maharashtra">Maharashtra</option>
//               <option value="Manipur">Manipur</option>
//               <option value="Meghalaya">Meghalaya</option>
//               <option value="Mizoram">Mizoram</option>
//               <option value="Nagaland">Nagaland</option>
//               <option value="Odisha">Odisha</option>
//               <option value="Punjab">Punjab</option>
//               <option value="Rajasthan">Rajasthan</option>
//               <option value="Sikkim">Sikkim</option>
//               <option value="Tamil Nadu">Tamil Nadu</option>
//               <option value="Telangana">Telangana</option>
//               <option value="Tripura">Tripura</option>
//               <option value="Uttar Pradesh">Uttar Pradesh</option>
//               <option value="Uttarakhand">Uttarakhand</option>
//               <option value="West Bengal">West Bengal</option>
//             </select>
//             <div class="invalid-feedback"> invalid </div>
//           </div>
//           <br />
//           <label htmlFor="email">Address Line 1</label>
//           <input
//             name="AddressLine1"
//             type="text"
//             required
//             value={AddressLine1}
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <label htmlFor="email">Address Line 2</label>
//           <input
//             name="AddressLine2"
//             type="text"
//             value={AddressLine2}
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <label htmlFor="email">City</label>
//           <input
//             name="City"
//             type="text"
//             value={City}
//             onChange={this.handleChange}
//             required
//           />
//           <br />
//           <br />
//           <div class="mb-3" id="a">
//             <label for="formFileSm" class="form-label">
//               Upload Address Proof
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//               required
//             />
//           </div>
//           <br />
//           <button type="submit">
//             <Link
//               to="/validatedbankdetails"
//               style={{ textDecoration: "none", color: "White" }}
//             >
//               Submit
//             </Link>
//           </button>
//         </div>
//       </form>
//     );
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     console.log("Submitting");
//     console.log(this.state);
//   };
// }
// export default Address;
