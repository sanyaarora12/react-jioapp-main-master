import axios from "axios";
import React, { Component } from "react";
import Button from "../Components/Button";

class Login extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);
    axios.post("api/uploadfile", formData);
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Button />
        <h1>Personal Details</h1>
        <label>PAN Number</label>
        <br />
        <input type="text" placeholder="Please enter your PAN No." />
        <br />
        <div>
          <br />
        <label>PAN Card Photo</label>
        <br />
        <input type="file" onChange={this.onFileChange} />
          {/* <button onClick={this.onFileUpload}>Upload</button> */}
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Login;
