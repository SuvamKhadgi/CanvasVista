import "../assets/css/Header.css";
interface DecodedToken {
  roles?: string[];
  // other token properties
}
import React, { useEffect, useState } from "react";
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
  }, []);

  const handleLoginRedirect = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const decodedToken = parseJwt(accessToken);
      console.log('Decoded Token:', decodedToken);

      if (decodedToken.roles && decodedToken.roles.includes("admin")) {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/login";
    }
  };


  const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload) as DecodedToken;
  };
  return (
    <>
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
              <i data-feather="search" />
              <span>Search</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="heart" />
              <span>Wish List</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="message-square" />
              <span>Feedback</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="user" />
              <span>Account</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <i data-feather="help-circle" />
              <span>Help</span>
            </a>
          </li>
          <li className="navbar__item">
            <button className="navbar__link" onClick={handleLoginRedirect}>
              <i data-feather="log-in" />
              <span>Login</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
