import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "Black",
        color: "White",
        fontWeight: "bolder",
        height: "72px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p> &copy; Rajith Suvarna Dš - {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
