
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboardvideo from "../../assets/images/dashboardvideo.jpeg";

const WhatYouGetSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
          .image-hover {
            transition: transform 0.5s ease;
          }

          .image-hover:hover {
            transform: scale(1.03);
          }
        `}
      </style>

      {/* Main Section */}
      <div className="bg-white px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-center max-w-7xl mx-auto">
        
        {/* Book Call Button */}
       <div className="pb-8 flex justify-center" data-aos="fade-down">
  <button
    onClick={() =>
      window.open(
        "https://connect.suprans.in/#/lumbeeinternationalpvtltd",
        "_blank"
      )
    }
    className="px-4 sm:px-6 py-2 border-2 border-red-500 text-red-600 font-semibold rounded-full flex items-center gap-2 hover:bg-red-100 transition text-sm sm:text-base"
  >
    Book a 1:1 Video Call
    <span className="text-lg sm:text-xl">➡️</span>
  </button>
</div>


        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          {/* Left Content */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-snug text-center lg:text-left">
              <span className="text-red-600 font-bold">What</span>{" "}
              all you will get?
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl lg:text-2xl text-gray-800">
              {[
                "Expert Consultation",
                "100% personalized guidance",
                "Actionable solutions",
                "Recording access",
                "Follow-up support",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-green-500 text-lg sm:text-xl mt-1">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div
            className="w-full lg:w-1/2 flex items-center justify-center"
            data-aos="fade-left"
          >
            <div className="w-full h-56 sm:h-72 lg:h-96 bg-pink-100 rounded-xl flex items-center justify-center overflow-hidden image-hover">
              <img
                src={Dashboardvideo}
                alt="Dashboard Preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatYouGetSection;
