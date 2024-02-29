import React from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";
import Navbar from "../components/navbar";

const Whislist: React.FC = () => {


    return (
        <>
            <Header />
            <div className="containers123">
                <div className="navvbaar">
                    <Navbar />
                </div>
                <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
                    <h1 className=" text-3xl font-bold text-center bg-white pt-6 pb-4">
                        YOUR WHISH LIST ITEMS                    </h1>

                </div>

            </div>
        </>
    );
};

export default Whislist;
