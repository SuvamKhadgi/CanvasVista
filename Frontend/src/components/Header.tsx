import "../assets/css/Header.css";

import React, { useEffect } from "react";
const Header: React.FC = () => {
  useEffect(() => {
    // Load Feather Icons script
    const featherScript = document.createElement("script");
    featherScript.src = "https://unpkg.com/feather-icons";
    featherScript.async = true;
    document.body.appendChild(featherScript);

    // Load your custom script.js
    const customScript = document.createElement("script");
    // customScript.src = '../assets/javascript/Header.js';
    customScript.async = true;
    document.body.appendChild(customScript);

    // Run feather.replace() after scripts are loaded
    featherScript.onload = () => {
      window.feather.replace();
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/> */}
      <div className="titlee fixed">
        <img src="src\images\logo.png" alt="" style={{ height: "60px" }} />
      </div>
    </>
  );
};

export default Header;
