// import React, { Component } from "react";
// import OtpStyles from "../Components/OtpStyle";
// import OtpInput from "react-otp-input";

// export default function Otp() {

//     function clickEvent(first, last) {
//         if (first.value.length) {
//             document.getElementById(last).focus();
//         }

//     };
//     return (
//         <div>
//             <OtpStyles />
//             <div className="container">
//                 <h2>Otp has been sent successfully. <br /> Please enter the same OTP below</h2>
//                 <div className="userInput">
//                     {/* <span><input type="text" id='ist' maxLength="1" onkeyup="clickEvent(this,'sec')"></input></span>
//                   <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this, 'third')"></input>
//                   <input type="text" id='third' maxLength="1" onkeyup="clickEvent(this, 'fourth')"></input>
//                   <input type="text" id='fourth' maxLength="1" onkeyup="clickEvent(this, 'fifth')"></input>
//                   <input type="text" id='fifth' maxLength="1"></input> */}
//                     <OtpInput
//                         value={this.state.otp}
//                         numInputs={6}
//                     />
//                 </div>
//                 <br /> <br /> <br /> <br />

//                 <button type="button" className="btn btn-primary btn-lg">
//                     Submit
//                 </button>

//             </div></div>

//     );
// }

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import OtpStyles from "../Components/OtpStyle";

export default function Otp() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <>
      <OtpStyles />
      <div className="container">
        <h2>
          Otp has been sent successfully.
          <br /> Please enter the same OTP below{" "}
        </h2>
        <OtpInput
          value={code}
          onChange={handleChange}
          numInputs={6}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            boxShadow: "1px 3px 1px blue",
            border: "1px solid transparent ",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        />
      </div>
    </>
  );
}
