
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Brandsup from "../../assets/images/brandsup.png";
import Brandsup2 from "../../assets/images/B1.png";
import { Link } from "react-router-dom";

const DealsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
      data-aos="fade-up"
    >
      {/* Left Side Content */}
      <div
        className="lg:col-span-2 space-y-6"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
          Grab deals on ecomm tools to{" "}
          <br className="hidden sm:block" />
          start your new business!
        </h2>

        <p className="text-sm sm:text-base">
          <span className="bg-red-600 text-white px-2 py-1 rounded-md font-semibold">
            Save $299
          </span>{" "}
          with deals on essential business tools
        </p>

        {/* Chart/Image section */}
        <div className="relative bg-[#1E1E3F] rounded-xl flex items-center justify-center w-full h-56 sm:h-64 md:h-80">
          <img
            src={Brandsup}
            alt="Brand Stats"
            className="object-cover h-full w-full rounded-xl"
          />
          <span className="absolute -bottom-3 left-4 bg-red-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
            Stats for the day
          </span>
        </div>
      </div>

      {/* Right Side Card */}
      <div
        className="bg-red-100 rounded-2xl p-4 sm:p-6 text-center relative cursor-pointer hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        {/* Deal Image */}
        <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
          <img
            src={Brandsup2}
            alt="Deal Pack"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base sm:text-lg mb-2 text-red-700">
          Get the Mr. Suprans Deal Pack
        </h3>

        {/* Deal Features */}
        <div className="text-xs sm:text-sm text-left space-y-2 text-red-700 font-medium px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-red-600 flex-shrink-0" />
            Save up to $299
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-red-600 flex-shrink-0" />
            Get resources for free
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-red-600 flex-shrink-0" />
            No Credit Card Required
          </div>
        </div>

        {/* CTA Button */}
      <Link
  to="/videocall"
  className="mt-6 border border-red-600 text-red-600 px-4 sm:px-5 py-2 rounded-full 
             font-medium text-sm sm:text-base hover:bg-red-600 hover:text-white 
             transition w-full text-center block"
>
  Book a Personal VideoCall Now!
</Link>
      </div>
    </div>
  );
};

export default DealsSection;
