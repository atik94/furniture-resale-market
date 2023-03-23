import React from "react";
import image1 from "../../../assets/Images/Banner/slider1.jpg";
import image2 from "../../../assets/Images/Banner/slider2.jpg";
import image3 from "../../../assets/Images/Banner/slider3.jpg";
import image4 from "../../../assets/Images/Banner/slider4.jpg";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6 justify-center items-center">
        <a href="#about">
          <button className="btn btn-outline btn-primary">About</button>
        </a>
        <a href="#contact">
          <button className="btn btn-outline btn-primary">Contact</button>
        </a>
      </div>
    </section>
  );
};

export default Banner;
