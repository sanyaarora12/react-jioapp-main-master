import React, { useState } from 'react';
import data from "./data.json";

export default function Approval() {
  const [contacts,setContacts]=useState(data);
  
  const handleRemove = (id) => {
    const arr = contacts.filter((item) => item.id !== id);
    setContacts(arr);
  };

  const handleClick=()=>{
    alert("accepted!")
  }
  return (
    <div id='output'>
        <table>
            <thead>
              <tr >
                <th>Full Name</th>
                <th>Address</th>
                <br/>
                <th>Phone number</th>
                <br/>
                <th>Email</th>
                <br/>
                <th>Pan number</th>
                
                <th>Aadhaar number</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact,index)=>(
                <tr>
                  <td>{contact.fullName}</td>
                  <br/>
                  <td>{contact.address}</td>
                  <br/>
                  <td>{contact.phoneNumber}</td>
                  <br/><br/>
                  <td>{contact.email}</td>
                  <td>{contact.pannumber}</td>
                  <td>{contact.aadhaarno}</td>
                  <button onClick={handleClick}>Accept</button>
                  <button onClick={() => handleRemove(contact.id)}>Reject</button>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}
