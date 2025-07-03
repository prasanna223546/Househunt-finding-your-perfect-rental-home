// src/pages/Home.js
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/home-bg.jpg')", // ✅ from public folder
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "20px",
        color: "#fff", // white text on image
        backdropFilter: "blur(4px)",
      }}
    >
      <h1 style={{ fontSize: "48px", textShadow: "1px 1px 4px rgba(11, 3, 3, 0.5)" }}>
        🏠 Welcome to HouseHunt
      </h1>
      <p style={{ fontSize: "20px", textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
        Find or list your perfect rental home!
      </p>
    </div>
  );
};

export default Home;





