import React from "react";
import Button from "../Components/Button";
import KycStyle from "../Components/KycStyle";
import { Link } from "react-router-dom";

export class KycPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PanNumber: "",
      Adhaarnumber: "",
      GSTNumber: "",
    };
    this.state = {
      profileImg:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ profileImg: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };
  }

  render() {
    const { PanNumber, Adhaarnumber, GSTNumber } = this.state;
    const { profileImg } = this.state;
    return (
      <div className="K">
        <KycStyle />
        <form onSubmit={this.handleSubmit}>
          <label>PanNumber</label>
          <input
            name="PanNumber"
            type="text"
            placeholder="Enter your PanNumber"
            maxLength={10}
            value={PanNumber}
            onChange={this.handleChange}
          />
          <div className="page">
            <div className="container">
              <h1 className="heading">Add your Image</h1>
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={this.imageHandler}
              />
              <div className="label">
                <label className="image-upload" htmlFor="input">
                  <i className="material-icons">add_photo_alternate</i>
                  Choose your Photo
                </label>
              </div>
            </div>
          </div>
          <br /> <br />
          <label>Adhaar number</label>
          <input
            name="Adhaar number"
            type="text"
            placeholder="Enter your Adhar number"
            value={Adhaarnumber}
            onChange={this.handleChange}
          />
          <br /> <br />
          <label>GSTNumber</label>
          <input
            name="GSTNumber"
            type="text"
            placeholder="Enter your GST Number"
            value={GSTNumber}
            onChange={this.handleChange}
          />
          <br /> <br />
          <Button />
          <button type="submit">
            <Link to="/Validatedbankdetails">Submit</Link>
          </button>
        </form>
      </div>
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

//  function ValidatePAN() {
//         var txtPANCard = document.getElementById("txtPANCard");
//         var lblPANCard = document.getElementById("lblPANCard")
//         var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
//         if (regex.test(txtPANCard.value.toUpperCase())) {
//             lblPANCard.style.visibility = "hidden";
//             return true;
//         } else {
//             lblPANCard.style.visibility = "visible";
//             return false;
//         }
//     }
//   render() {
//     return (
//       <div>
//         PAN Card:
//         <input name="txtPANCard" type="text" id="txtPANCard" class="PAN" />
//         <span id="lblPANCard" class="error">
//           Invalid PAN Number
//         </span>
//         <hr />
//         <input
//           type="button"
//           id="btnSubmit"
//           value="Submit"
//           onclick="ValidatePAN()"
//         />
//       </div>
//     );
