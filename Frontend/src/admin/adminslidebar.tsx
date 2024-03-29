import React, { useEffect } from "react";
import "../assets/css/admincss/adminslidebar.css";

const Slidebar: React.FC = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title> </title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <input type="checkbox" id="check" />
      <label className="buttoanm bars" htmlFor="check"><i className="fas fa-bars" /></label>
      <div className="side_bar">
        <div className="title">
          <div className="logo">CANVA-VISTA</div>
          <label className=" buttonm-cancel" htmlFor="check"><i className="fas fa-times" /></label>
        </div>
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-qrcode" />
              Home
            </a>
          </li>
          <li>
            <a href="/Create-painting">
              <i className="fas fa-plus-square " />
              Add/Create
            </a>
          </li>
          <li>
            <a href="/all-items">
              <i className="fas fa-stream" />
              Inventory
            </a>
          </li>
          <li>
            <a href="/users">
              <i className="fas fa-users" />
              Users
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle" />
              About
            </a>
          </li>

          <li>
            <a href="/all-order">
              <i className="fas fa-shopping-cart " />
              Order
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comments" />
              Feedback
            </a>
          </li>
          <li>
            <a href="/" onClick={() => { localStorage.removeItem("accessToken"); localStorage.removeItem("id"); localStorage.removeItem("name"); }}>
              <i className="fas fa-times" />
              Logout
            </a>
          </li>
        </ul>
        <div className="media_icons">
          <a href="www.fb.com">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </>


  )
};

export default Slidebar;

