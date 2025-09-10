
import React, { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CallbackModal from "../modal/CallbackModal";

const DropshippingBanner = ({ onButtonClick }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);


  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center py-10 px-6 text-center"
      data-aos="fade-up"
    >
      <div className="mb-4">
        <h1 className="text-2xl md:text-4xl">Launch Smarter, Sell Faster</h1>
      </div>

      <div className="mb-4">
        <h2 className="text-xl md:text-4xl font-bold">
          <span className="bg-red-600 px-2 py-1 rounded">DROPSHIPPING</span>{" "}
          Made Effortless
        </h2>
      </div>

      <div className="mb-4">
        <p className="text-lg md:text-2xl">
          with <span className="text-red-500 font-bold">SUPRANS</span>
        </p>
      </div>

      <div className="mb-6">
     <button
        onClick={onButtonClick} // use parent handler
        className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-110 relative z-10"
      >
        Reserve your Spot Now!
      </button>

      {/* Modal */}
      
      </div>

      <div className="flex items-center mb-2 space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-10 h-10 text-yellow-400 transition-transform transform hover:scale-125 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            data-aos="fade-up"
            data-aos-delay={350 + i * 100}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.442a1 1 0 00-.364 1.118l1.286 3.948c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.36 2.442c-.783.57-1.838-.197-1.538-1.118l1.286-3.948a1 1 0 00-.364-1.118L2.664 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
          </svg>
        ))}
        <span
          className="ml-4 text-5xl md:text-6xl font-bold"
          data-aos="fade-left"
          data-aos-delay="700"
        >
          4.8
        </span>
      </div>

      <p className="text-sm md:text-base text-gray-300" data-aos="fade-up" data-aos-delay="800">
        Rated Excellent by 500+ Clients around the world
      </p>

    </div>
  );
};

export default DropshippingBanner;
