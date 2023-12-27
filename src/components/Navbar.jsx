import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigateTo = useNavigate();
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
          <Button color="inherit" onClick={()=>navigateTo("/userConsole")}>User Console</Button> &nbsp;&nbsp;
          <Button color="inherit" onClick={()=>navigateTo("/login")}>Login / Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
