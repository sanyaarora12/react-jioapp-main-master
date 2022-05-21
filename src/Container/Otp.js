import React from "react";
import { Link } from "react-router-dom";
import OtpStyle from "../Components/OtpStyle";

export default function Otp() {
   
    function clickEvent(first,last){
        if(first.value.length){
            document.getElementById(last).focus();
        }

    };
      return (
        <div>
          <OtpStyle/>
          <div className="container">
              <h2>Otp has been sent successfully. <br/> please enter the same OTP below</h2>
              <br />
              <div class="hstack gap-3" >
                  <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this,'sec')"></input>
                  <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this, 'third')"></input>
                  <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this, 'fourth')"></input>
                  <input type="text" id='sec' maxLength="1" onkeyup="clickEvent(this, 'fifth')"></input>
                  <input type="text" id='sec' maxLength="1"></input>
          </div>
          <br />
        
          <button type="button" className="btn btn-primary btn-lg">
            <Link to="/kycpage" id="submit"
            style={{ textDecoration: "none", color: "White" }}>
            Submit
            </Link>
          </button>
          
        </div></div>
        
      );
      }