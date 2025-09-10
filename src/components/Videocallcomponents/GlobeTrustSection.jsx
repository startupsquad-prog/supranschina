import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import map from "../../assets/images/mapusa.jpeg";

const GlobeTrustSection = ({onButtonClick}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-16 pt-4 pb-10"
      data-aos="fade-up"
    >
      {/* Left Side */}
      <div className="text-center md:text-left mb-8 md:mb-0 md:pl-20 max-w-xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug">
          Checkout the people <br />
          around the Globe trusting <br />{" "}
          <span className="text-red-600 font-bold">SUPRANS</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          You can be also one of them
        </p>

  <button
  onClick={onButtonClick} // <-- add this
  className="mt-6 px-5 sm:px-6 py-2 border-2 border-red-600 text-red-600 rounded-full 
             hover:bg-red-600 hover:text-white transition-all flex items-center gap-2 
             mx-auto md:mx-0 transform hover:scale-105 hover:shadow-lg duration-300"
>
  Start Your Business
  <span className="text-lg sm:text-xl">➡️</span>
</button>

      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={map}
          alt="US Map"
          className="w-full max-w-md md:max-w-none h-auto rounded-lg "
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>
    </div>
  );
};

export default GlobeTrustSection;
