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

            </div>
        </>
    );
};

export default Whislist;
