import React, { Component } from "react";
import OtpStyles from "../Components/OtpStyles";


export default function Otp() {
   
    function clickEvent(first,last){
        if(first.value.length){
            document.getElementById(last).focus();
        }

    };
      return (
        <div>
          <OtpStyles/>
          <div className="container">
              <h2>Otp has been sent successfully. <br/> Please enter the same OTP below</h2>
              <div className="userInput">
                  <input type="text" id='ist' maxLength="1" onkeyup="clickEvent(this,'sec')"></input>
                  <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this, 'third')"></input>
                  <input type="text" id='third' maxLength="1" onkeyup="clickEvent(this, 'fourth')"></input>
                  <input type="text" id='fourth' maxLength="1" onkeyup="clickEvent(this, 'fifth')"></input>
                  <input type="text" id='fifth' maxLength="1"></input>
          </div>
          <br/> <br/> <br/> <br/>
        
          <button type="button" className="btn btn-primary btn-lg">
            Submit
          </button>
          
        </div></div>
        
      );
      }