// import React from "react";
// import { Link } from "react-router-dom";
// import KycStyle from "../Components/KycStyle";

// export class KycPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       PanNumber: "",
//       Adhaarnumber: "",
//       GSTNumber: "",
//     };
//   }

//   render() {
//     const { PanNumber, Adhaarnumber, GSTNumber } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <KycStyle />
//         <div classname="k">
//           <label>PanNumber</label>
//           <input
//             name="PanNumber"
//             type="text"
//             placeholder="Enter your PanNumber"
//             maxLength={10}
//             value={PanNumber}
//             onChange={this.handleChange}
//           />
//           <label>Adhaar number</label>
//           <input
//             name="Adhaar number"
//             type="text"
//             placeholder="Enter your Adhar number"
//             value={Adhaarnumber}
//             onChange={this.handleChange}
//           />
//           <br /> <br />
//           <label>GSTNumber</label>
//           <input
//             name="GSTNumber"
//             type="text"
//             placeholder="Enter your GST Number"
//             value={GSTNumber}
//             onChange={this.handleChange}
//           />
//           <br /> <br />
//           <button type="submit">
//             <Link to="/Address">Submit</Link>
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

// export default KycPage;
