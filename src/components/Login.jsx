import React, { useState } from "react";
import "./styles/login.css";
import axios from "axios";
import { useEffect } from "react";
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUpActive, setSignUpActive] = useState(true);

  const handleToggle = () => {
    setSignUpActive(!isSignUpActive);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [recaptchaText, setrecaptchaText] = useState("");
  const[ranNum,setRanNum] = useState();
  const[retest,setRetest] = useState(false);
  const [image,setImage] = useState("");
  const [test ,setTest] = useState(false)
  const navigate = useNavigate();

  //-----------------------Checkbox------------------------------------------------------

  
  //---------------------------------------------------------------------------------------


  //-------------------- FUNCTION FOR SIGNUP -------------------------------------------
  async function onHandleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/register", {
        username: name,
        email: email,
        password: password,
      });
      alert("Email has been sent for verification");
      handleToggle();

      setName("");
      setEmail("");
      setPassword("");
      navigate("/verify", {state: {email: email}});
    } catch (err) {
      alert("User Registation Failed😢");
    }
  }
  //---------------------------------------------------------------------------------------
  //-------------Fucntion For random generation captcha-----------------------------------
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const num = randomNumberInRange(1, 5000);
  //----------------------------------------------------------------------------------------
  //---------------------get captcha image ------------------------------------------------
    useEffect(()=>{
      const getimage = async() =>{
       
        const rn = randomNumberInRange(1, 5000)
        setRanNum(rn)
        console.log(rn);
        const response = await axios.get(`http://localhost:8080/api/generate/${rn}`);
        console.log(response);
        setImage(response.data.imageUrl);
        setRetest(false);
        // randomNumberInRange(1,5000);
      }
      getimage();
    },[test])
  //---------------------------------------------------------------------------------------------
  //-----------------------to verify the captcha -----------------------------------------------
  async function validate(event){
      try{
        console.log(ranNum);
        const response = await axios.post(`http://localhost:8080/api/validate/${ranNum}?enteredText=${recaptchaText}`);
        console.log(response);
        if(response.data == "Captcha is valid"){
          setRetest(true);
        }
      }
      catch(error){
        alert("Incorrect Text");
      }
    }
  //----------------------------------------------------------------------------------------------
 
  return (
    <div
      className={`container ${isSignUpActive ? "active" : ""}`}
      id="container"
    >
      <div
        className={`form-container ${isSignUpActive ? "sign-up" : "sign-in"}`}
      >
        {isSignUpActive ? (
          <form>
            {/* SIGNUP */}
            <h1>Create Account</h1>

            {/* <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            /> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{5,})"
              title="Password must be 5-12 characters long and include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (!@#$%^&*)"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required

            />
            <button onClick={onHandleSubmit}>Sign up</button>
          </form>
        ) : (
          <form>
            <h1>Sign In</h1>

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setloginEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})"
              title="Password must be 8-12 characters long and include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (!@#$%^&*)"
              required
              onChange={(e) => {
                setloginPassword(e.target.value);
              }}
            />

            <div style={{ display: "flex" }}>
              <img
                src={image}
                alt="ttes"
                height={"50px"}
                style={{ borderRadius: "1 0px", marginTop: "10px" }}
              />
              <CachedIcon style={{margin:"auto 10px", fontSize:"30px"}}  onClick={()=>setTest(!test)}></CachedIcon>
              <input
                type="text"
                placeholder="Enter Captcha"
                style={{ width: "120px", marginLeft: "20px" ,marginTop: "15px"}}
                onChange={(e) => {
                    setrecaptchaText(e.target.value);
                  }}
              />
            </div>

            
            <button style={{"marginTop":"30px"}}>Sign In</button>
          </form>
        )}
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel ${
              isSignUpActive ? "toggle-left" : "toggle-right"
            }`}
          >
            {isSignUpActive ? (
              <>
                <h1>Welcome Back!</h1>
                <p>Enter your email and password to login</p>
                <button onClick={handleToggle}>Sign In</button>
              </>
            ) : (
              <>
                <h1>Hello, Friend!</h1>
                <p>Register with your email</p>
                <button onClick={handleToggle}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
