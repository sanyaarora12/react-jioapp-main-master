import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeStyles from '../Components/HomeStyles';

function SuccessfulRegistration() {
  return (
      <>
      <HomeStyles />
    <div>
        <h2>Congratulations!</h2>
        <h3>You have successfully registered to JIO POSLite</h3>
        <br />
        <i class="bi bi-check-lg" id="tick">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></i>
<br />
<h2><NavLink to="/">Click here</NavLink> to Login into your account</h2>
    </div>
    </>
  )
}

export default SuccessfulRegistration;