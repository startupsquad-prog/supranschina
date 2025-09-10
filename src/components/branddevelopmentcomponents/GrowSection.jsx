
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const GrowSection = ({onButtonClick}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-red-600 text-white px-4 sm:px-6 py-10 sm:py-12 md:py-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">

        {/* Left Side Text */}
        <div
          className="text-left space-y-1 md:space-y-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-base sm:text-lg md:text-3xl font-light">Build</div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold">GROW</div>
          <div className="text-base sm:text-lg md:text-3xl font-light">Earn</div>
        </div>

        {/* Right Side Content */}
        <div
          className="text-white max-w-xl text-center md:text-left space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-sm sm:text-base md:text-2xl font-light leading-relaxed">
            You don't just want to exist in the market — you want to own a space in the customer's mind.
            That’s the power of a strong brand.
          </p>

          <button
  onClick={onButtonClick} // opens modal from parent
  className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium
             hover:bg-red-100 hover:scale-105 transition transform duration-300 
             w-full sm:w-auto inline-block md:ml-0"
>
  Start Branding Now
</button>
        </div>
      </div>
    </div>
  );
};

export default GrowSection;
