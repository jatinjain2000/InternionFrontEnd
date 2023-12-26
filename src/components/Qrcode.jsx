import React from 'react'
import './styles/qrCode.css'
const Qrcode = () => {
  return (
    <div className='qrcode'>
        <h3>Scan QR</h3><br/>
        <img src='/qr.png' alt='qrcode' style={{height:"200px",marginTop:"-5rem"}}></img>
        <input type='text' placeholder=' Enter OTP'></input>
        <button >Submit</button>
    </div>
  )
}

export default Qrcode;