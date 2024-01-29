import "../assets/css/Header.css";

import React, { useEffect } from "react";
const navbar: React.FC = () => {
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
      <nav className="navbar mt-20">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              <i data-feather="home" />
              <span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="message-square" />
              <span>Messages</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="users" />
              <span>Customers</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="folder" />
              <span>Projects</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="archive" />
              <span>Resources</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="help-circle" />
              <span>Help</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="/login" className="navbar__link">
              <i data-feather="log-in" />
              <span>login</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
