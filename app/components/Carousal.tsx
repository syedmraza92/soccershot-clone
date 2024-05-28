"use client";

import Image from "next/image";
// import React from "react";
// import Slider from "react-slick";
import logo from "../../public/assets/logo.png";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div className="">
//         <div className=" bg-soccershot-orange flex flex-col items-center justify-center text-white mx-4">
//           <Image src={logo} alt="soccer logo" className="w-48" />
//           <div>
//             <h3>Thomas Rockett</h3>
//             <h4>Integrator</h4>
//           </div>
//         </div>
//       </div>
//       <div className="bg-soccershot-orange flex flex-col items-center justify-center text-white mx-4">
//         <Image src={logo} alt="soccer logo" className="w-48" />
//         <div>
//           <h3>Thomas Rockett</h3>
//           <h4>Integrator</h4>
//         </div>
//       </div>
//     </Slider>
//   );
// }


import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
<div className="w-full overflow-hidden">
      <Slider {...settings} className="space-x-4">
        <div className="p-4"> 
          <div className="bg-soccershot-orange p-8 flex flex-col items-center text-white">
            <Image src={logo} alt="soccer logo" className="w-48" />
            <h3 className="font-semibold underline mt-3">Thomas Rockett</h3>
            <h4>Integrator</h4>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-soccershot-orange p-8 flex flex-col items-center text-white">
            <Image src={logo} alt="soccer logo" className="w-48" />
            <h3 className="font-semibold underline mt-3">Micah Starit</h3>
            <h4>Visionary</h4>
          </div>
        </div>

        <div className="p-4"> 
          <div className="bg-soccershot-orange p-8 flex flex-col items-center text-white">
            <Image src={logo} alt="soccer logo" className="w-48" />
            <h3 className="font-semibold underline mt-3">Thomas Rockett</h3>
            <h4>Integrator</h4>
          </div>
        </div>

        <div className="p-4"> 
          <div className="bg-soccershot-orange p-8 flex flex-col items-center text-white">
            <Image src={logo} alt="soccer logo" className="w-48" />
            <h3 className="font-semibold underline mt-3">Micah Starit</h3>
            <h4>Integrator</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;