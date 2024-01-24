import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/navbar";

const Canvaspainting: React.FC = () => {
  return (
    <>
      <Header />
      <div className="containers123">
        <div className="navvbaar">
          <Navbar />
        </div>
        <div className="w-11/12 ml-32 mr-8  mt-20"></div>
      </div>
    </>
  );
};

export default Canvaspainting;
