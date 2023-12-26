import React from 'react'
import './styles/emailOtp.css'

const EmailOtp = () => {
  return (
    <div className='otp'>
        <h3>Enter the OTP you recieved on EMAIL??</h3><br/>
        <input type='text' placeholder=' Enter OTP'></input>
        <button >Submit</button>

    </div>
  )
}

export default EmailOtp;