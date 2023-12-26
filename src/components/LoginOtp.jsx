import React from 'react'
import './styles/loginOtp.css'

const LoginOtp = () => {
  return (
    <div className='loginotp'>
        <h3>Enter the OTP</h3><br/>
        <input type='text' placeholder=' Enter OTP'></input>
        <button >Submit</button>
    </div>
  )
}

export default LoginOtp;