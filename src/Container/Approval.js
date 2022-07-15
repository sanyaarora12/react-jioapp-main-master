import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/auth";
import data from "./data.json";

export default function Approval() {
  const [contacts, setContacts] = useState(data);

  const handleRemove = (id) => {
    const arr = contacts.filter((item) => item.id !== id);
    setContacts(arr);
  };

  const handleClick = () => {
    alert("accepted!");
  };
  const auth=useAuth()
  const navigate=useNavigate()

  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }
 
  return (
    <div id="output">
      <h1 style={{ color: "darkblue", marginLeft: "500px" }}>
        {" "}
        Admin Approval{" "}
      </h1>
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">Email</th>
            <th scope="col">Pan Number</th>
            <th scope="col">Adhaar Number</th>
            <th scope="col">GST Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr>
              <td>{contact.fullName}</td>

              <td>{contact.address}</td>

              <td>{contact.phoneNumber}</td>

              <td>{contact.email}</td>
              <td>{contact.pannumber}</td>
              <td>{contact.aadhaarno}</td>
              <td>{contact.GSTNumber}</td>

              <button id="green" onClick={handleClick}>
                Accept
              </button>
              <button id="red" onClick={() => handleRemove(contact.id)}>
                Reject
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
