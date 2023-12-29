import React from 'react'
import './styles/loginOtp.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
const LoginOtp = () => {
  const[otp,setOtp] = useState("");
  const navigateTo = useNavigate();
  const location = useLocation();
  const email = location.state.loginEmail;
  async function validate() {
    try {
      const response = await axios.get(
        `http://compasslite.int.cyraacs.in/api/register/otp/${email}/${otp}`
    
      );
     
      // console.log(response.data);
      if (response.data == true) {
        alert("LOGIN SUCCESSFULL");
        setOtp(""); 
        navigateTo("/"); 
        window.location.reload();
      } else {
        alert("Incorrect OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Incorrect OTP");
    } 
  }
  

  return (
    <div className='loginotp'>
        <h3>Enter the OTP</h3><br/>
        <input type='text' placeholder=' Enter OTP' onChange={(e)=>{setOtp(e.target.value)}}></input>
        <button onClick={validate}>Submit</button>
    </div>
  )
}

export default LoginOtp;