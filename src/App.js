import "./App.css";
import AadharForm from "./components/AadharForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResidenceForm from "./components/ResidenceForm";
import LearnersForm from "./components/LearnersForm";
import Login from "./components/Login";
import EmailOtp from "./components/EmailOtp";
import Qrcode from "./components/Qrcode";
import LoginOtp from "./components/LoginOtp";
import Verify from "./components/Verify";
import AdminConsole from "./components/AdminConsole";
import AdminTile from "./components/AdminTile";
import UserConsole from "./components/UserConsole";
import AdminData from "./components/AdminData";
import { useState } from "react";
import Landing from "./components/Landing";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") != null
  );

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Landing />} />
          <Route path="/emailotp" element={<EmailOtp />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/loginotp" element={<LoginOtp />} />
          <Route path="/verify" element={<Verify />} />

            <Route path="/home" element={isloggedIn ? <Home /> : <Login />} />
            <Route path="/aadharForm" element={isloggedIn ?<AadharForm />: <Login />} />
            <Route path="/residenceForm" element={isloggedIn ?<ResidenceForm />: <Login />} />
            <Route path="/learnerForm" element={isloggedIn ?<LearnersForm />: <Login />} />

            <Route path="/userConsole" element={isloggedIn ?<UserConsole />: <Login />} />
            <Route path="/admin" element={isloggedIn ?<AdminConsole />: <Login />} />
          
            
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route path="/admindata" element={<AdminData />} /> */
}
