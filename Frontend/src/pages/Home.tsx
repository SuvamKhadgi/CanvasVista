import React from "react";
import "../assets/css/Home.css";

import Slider from "react-slick";
import Header from "../components/Header";
import Navbar from "../components/navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Set arrows to false to hide them
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 3000ms for 3 seconds)
  };

  return (
    <>
      <Header />
      <div className="containers123">
        <div className="navvbaar">
          <Navbar />
        </div>
        <div className="w-11/12 ml-32 mr-8  mt-20">
          <div className="slick-container rounded overflow-hidden">
            <Slider {...carouselSettings}>
              <div>
                <img
                  className="w-full h-full  rounded"
                  style={{ maxHeight: "550px", width: "100%" }}
                  src="src\images\1st.png"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  className="w-full h-full  rounded"
                  style={{ maxHeight: "550px", width: "100%" }}
                  src="src\images\2nd.png"
                  alt="Image 2"
                />
              </div>
              <div>
                <img
                  className="w-full h-full  rounded"
                  style={{ maxHeight: "550px", width: "100%" }}
                  src="src\images\3rd.png"
                  alt="Image 3"
                />
              </div>
              <div>
                <img
                  className="w-full h-full  rounded"
                  style={{ maxHeight: "550px", width: "100%" }}
                  src="src\images\4th.png"
                  alt="Image 4"
                />
              </div>
            </Slider>
          </div>
          <div className="flex justify-center items-center bg-white mt-3">
            <div className="text-center ">
              <h1 className="text-3xl font-bold mb-4 mt-3">
                SHOP DIFFERENT TYPES OF PAINTINGS
              </h1>
              <div className="grid grid-cols-4 gap-4">
                <img
                  src="src\images\acyric_painting.png"
                  alt="Painting Image 1"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <a href="/Canvas-paintings">
                  {" "}
                  <img
                    src="src\images\canvas_painting.png"
                    alt="Painting Image 2"
                    className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                  />
                </a>
                <img
                  src="src\images\digital_art.png"
                  alt="Painting Image 3"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\handmade.png"
                  alt="Painting Image 4"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\watercolor_painting.png"
                  alt="Painting Image 5"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\nepali_painting.png"
                  alt="Painting Image 6"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\OG_painting.png"
                  alt="Painting Image 7"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\oil_painting.png"
                  alt="Painting Image 8"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-white mt-3">
            <div className="text-center ">
              <h1 className="text-3xl font-bold mb-4 mt-3">
                DIFFERENT THANGKA PAINTINGS
              </h1>
              <div className="grid grid-cols-4 gap-4">
                <img
                  src="src\images\thangka2.jpg"
                  alt="Painting Image 1"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\thangka1.jpg"
                  alt="Painting Image 2"
                  className="cursor-pointer w-full h-full object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\thangka.jpg"
                  alt="Painting Image 3"
                  className="cursor-pointer w-full  object-cover scale-100 hover:scale-105"
                />
                <img
                  src="src\images\thangka4.jpg"
                  alt="Painting Image 4"
                  className="cursor-pointer w-full h-38 object-cover scale-100 hover:scale-105 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
