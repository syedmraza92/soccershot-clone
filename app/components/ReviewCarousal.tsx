"use client"
import React from "react";
import Slider from "react-slick";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AutoPlay from "./Carousal";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    AutoPlay,
  };
  return (
    <div className="slider-container bg-yellow-400 px-12 py-12 lg:flex lg:justify-center lg:py-20">
      <Slider {...settings} className="max-w-screen-lg lg:px-12">
        <div>
          <h3 className="text-soccershot-blue text-2xl font-bold lg:py-4">All of the coaches and staff have been incredible.</h3>
          <p className="text-soccershot-blue lg:pb-8">“We’ve had three different coaches since we started Soccer Shots, and all of them have been great instructors, remembered the kids’ names, and did an excellent job getting all of the kids to participate. We’ve already recommended to several friends“</p>
        </div>
        <div>
          <h3 className="text-soccershot-blue text-2xl font-bold lg:py-4">All of the coaches and staff have been incredible.</h3>
          <p className="text-soccershot-blue lg:pb-8">“We’ve had three different coaches since we started Soccer Shots, and all of them have been great instructors, remembered the kids’ names, and did an excellent job getting all of the kids to participate. We’ve already recommended to several friends“</p>
        </div>
        <div>
          <h3 className="text-soccershot-blue text-2xl font-bold lg:py-4">All of the coaches and staff have been incredible.</h3>
          <p className="text-soccershot-blue lg:pb-8">“We’ve had three different coaches since we started Soccer Shots, and all of them have been great instructors, remembered the kids’ names, and did an excellent job getting all of the kids to participate. We’ve already recommended to several friends“</p>
        </div>
        <div>
          <h3 className="text-soccershot-blue text-2xl font-bold lg:py-4">All of the coaches and staff have been incredible.</h3>
          <p className="text-soccershot-blue lg:pb-8">“We’ve had three different coaches since we started Soccer Shots, and all of them have been great instructors, remembered the kids’ names, and did an excellent job getting all of the kids to participate. We’ve already recommended to several friends“</p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;