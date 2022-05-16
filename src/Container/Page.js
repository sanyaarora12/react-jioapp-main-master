import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Page(){
    const initialValues = {email: "",phone: "",shop: "" };
    const [formValues,setFormValues] = useState(initialValues);

    const handleChange = (event) =>{
        const {name,value} =event.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues)
    };

    return(
        <div className="container">
            
            <form>
            <h1>Register to Jio Mart Digital</h1>
            <div className="ui divider"></div>
            <div className="ui form">
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="email" onChange={handleChange}  /> 
                    <br />
                    <label>Phone number</label>
                <input type="text" name="phonenumber" placeholder="Phone number" onChange={handleChange} />

                    <label>Shop Name</label>
                <input type="text" name="Shopname" placeholder="shop name" onChange={handleChange}   />
                      </div>
                   </div>
                </form>
                <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
           <label className="form-check-label" for="flexCheckDefault">
           <NavLink activeClassName ="active" to="/Terms">Terms and conditions</NavLink>
           </label>
        </div>
        <br />
        <button type="button" id="Nextbutton" class="btn btn-primary btn-lg">
               Send OTP
            </button>
            </div>
            
    )
}