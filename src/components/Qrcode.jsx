import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/qrCode.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Qrcode = () => {
  const [qrImg, setQrImg] = useState("");
  const[otp,setOtp] = useState("");
  const location = useLocation();
  const email = location.state.emailData;
  const navigateTo = useNavigate();
  useEffect(() => {
    generateQR();
  },[]);

  async function generateQR() {
    try {
      const response = await axios.get(
        `http://compasslite.int.cyraacs.in/api/register/generateQr?email=${email}`
    
      );
      // console.log(response.data);
      setQrImg(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function validate() {
    try {
      const response = await axios.get(
        `http://compasslite.int.cyraacs.in/api/register/otp/${email}/${otp}`
    
      );
      console.log(response.data);
      if (response.data == true) {
        alert("Registration successful");
        setOtp(""); 
        navigateTo("/login"); 
      } else {
        alert("Incorrect OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Incorrect OTP");
    } 
  }

  return (
    <div className="qrcode">
      <h3>Scan QR</h3>
      <br />
      <img
        src={qrImg}
        alt="qrcode"
        style={{ height: "200px", marginTop: "-5rem" }}
      ></img>
      <input type="text" placeholder=" Enter OTP"  onChange={(e)=>setOtp(e.target.value)}></input>
      <button  onClick={validate}>Submit</button>
    </div>
  );
};

export default Qrcode;
