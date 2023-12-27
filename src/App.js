import "./App.css";
import AadharForm from "./components/AadharForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResidenceForm from "./components/ResidenceForm";
import LearnersForm from './components/LearnersForm'
import Login from "./components/Login";
import EmailOtp from './components/EmailOtp';
import Qrcode from './components/Qrcode';
import LoginOtp from './components/LoginOtp';
import Verify from "./components/Verify";
import AdminConsole from "./components/AdminConsole";
import AdminTile from "./components/AdminTile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aadharForm" element={<AadharForm />} />
          <Route path="/residenceForm" element={<ResidenceForm />} />
          <Route path="/learnerForm" element={<LearnersForm />} />
          
          <Route path="/emailotp" element={<EmailOtp />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/loginotp" element={<LoginOtp />} />
          <Route path ="/verify" element={<Verify/>}/>
          <Route path = "/admin" element={<AdminConsole/>}/>
          <Route path = "/admintile" element={<AdminTile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
