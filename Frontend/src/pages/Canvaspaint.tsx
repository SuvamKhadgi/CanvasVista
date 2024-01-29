import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/navbar";

const Canvaspainting: React.FC = () => {
  return (
    <>
      <Header />
      <div className="containers123 flex ">
        <div className="navvbaar">
          <Navbar />
        </div>
        <div className="w-11/12 ml-32 mr-8  mt-20">
          <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4">
            CANVAS PAINTAING
          </h1>
          <br />
        </div>
      </div>
    </>
  );
};

export default Canvaspainting;
