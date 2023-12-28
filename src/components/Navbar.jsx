import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("admin"));

  const navigateTo = useNavigate();
  const [isloggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userId") != null
  );

  const logout = () => {
    localStorage.clear();
    navigateTo("/login");
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#5c6bc0" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={() => navigateTo("/")}>
              <img
                src="/logo.png"
                alt="logo"
                style={{
                  height: "50px",
                  width: "200px",
                  borderRadius: "2rem",
                  color: "#5c6bc0",
                }}
              ></img>
            </Button>
          </Typography>
          <Button color="inherit" onClick={() => navigateTo("/home")}>
            FILL FORM
          </Button>{" "}
          {isAdmin ? (
            <>
              <Button color="inherit" onClick={() => navigateTo("/admin")}>
                Admin Console
              </Button>{" "}
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigateTo("/admin")}> User Console
              </Button>{" "}
            </>
          )}
          
          &nbsp;&nbsp;
          {isloggedIn ? (
            <>
              <Button color="inherit" onClick={logout}>
                LOGOUT
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigateTo("/login")}>
                Login / Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
