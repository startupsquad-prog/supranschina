
import React, { useEffect } from "react";
import boxtools from "../../assets/images/boxtools.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SupransPromo({onButtonClick}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .floating {
            animation: floatUpDown 6s ease-in-out infinite;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          button:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>

      <div className="bg-[#fbb6b6] rounded-[32px] px-4 sm:px-6 md:px-16 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden max-w-7xl mx-auto mt-10 sm:mt-16">
        
        {/* Top left sparkles */}
        <div className="absolute top-[-10px] left-[-10px]">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
            <path d="M25 0L30 20L50 25L30 30L25 50L20 30L0 25L20 20L25 0Z" fill="#FF1F3D" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 50 50" fill="none" className="ml-2">
            <path d="M25 0L28 15L43 25L28 30L25 45L20 30L5 25L20 20L25 0Z" fill="#FF1F3D" />
          </svg>
        </div>

        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-md" data-aos="fade-right">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black mb-1 sm:mb-2">
            Be tense free..
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Choose SUPRANS
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 sm:gap-4 items-center md:items-start">
          <button
  onClick={onButtonClick} // open modal from parent
  className="bg-red-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-md 
             transition-transform duration-300 w-full sm:w-auto md:w-72"
>
  Create Your Account
</button>
            <button className="bg-white text-black border-4 border-red-500 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-md transition-transform duration-300 w-full sm:w-auto md:w-72">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className="mt-8 md:mt-0 w-44 sm:w-56 md:w-[400px] overflow-visible flex justify-center md:justify-end floating"
          data-aos="fade-left"
        >
          <img
            src={boxtools}
            alt="Suprans Promo"
            className="w-full h-auto scale-125 sm:scale-150 md:scale-[2.6] transform origin-center md:pr-20 md:pt-9"
          />
        </div>
      </div>
    </>
  );
}
