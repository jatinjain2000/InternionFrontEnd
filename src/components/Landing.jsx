import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        
        
        <img
          src="/logo.png"
          alt="logo"
          style={{ height: "10rem", borderRadius: "4rem", marginBottom: "2rem" }}
        />
        {localStorage.getItem("userId") != null ? (
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h3 style={{ color: "whitesmoke" }}>
              <u></u>
            </h3>
          </Link>
        ) : (
          <h3 style={{ color: "black" }}>
            Please Login / Register to Explore...
          </h3>
        )}
      </div>
    </>
  );
}

export default LandingPage;