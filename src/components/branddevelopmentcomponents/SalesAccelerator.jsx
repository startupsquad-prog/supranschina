
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Image imports
import dropbox from "../../assets/images/A1.png";
import shopify from "../../assets/images/A2.png";
import facebook from "../../assets/images/A3.png";
import metaverse from "../../assets/images/A6.png";
import amazonPay from "../../assets/images/A5.png";

const SalesAccelerator = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Floating animation style */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="bg-white py-10 px-4 flex flex-col items-center justify-center relative">
        {/* Icons Left */}
        <div
          className="hidden md:flex absolute md:left-20 lg:left-40 xl:left-80 top-1/2 transform -translate-y-1/2 flex-col gap-8"
          data-aos="fade-right"
        >
          {/* Dropbox */}
          <div
            className="w-24 md:w-36 h-24 md:h-36 rounded-full border-2 border-red-400 flex items-center justify-center bg-red-100 shadow-md
            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer float-animation"
          >
            <img src={dropbox} alt="Dropbox" className="w-30 h-30" />
          </div>

          {/* Shopify */}
          <div
            className="w-20 md:w-26 h-20 md:h-26 rounded-full border-2 border-red-400 flex items-center justify-center bg-red-100 shadow-md
            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer float-animation"
          >
            <img src={shopify} alt="Shopify" className="w-20 h-20" />
          </div>
        </div>

        {/* Icons Right */}
        <div
          className="hidden md:flex absolute md:right-20 lg:right-40 xl:right-72 top-1/2 transform -translate-y-1/2 flex-col items-center gap-4"
          data-aos="fade-left"
        >
          {/* Top row */}
          <div className="flex gap-4">
            {/* Facebook */}
            <div
              className="w-16 md:w-23 h-16 md:h-23 rounded-full border-[3px] border-red-500 flex items-center justify-center bg-red-100 shadow-md
              hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer float-animation"
            >
              <img src={facebook} alt="Facebook" className="w-20 h-20" />
            </div>

            {/* Amazon Pay */}
            <div
              className="w-20 md:w-28 h-20 md:h-28 rounded-full border-[3px] border-red-500 flex items-center justify-center bg-red-100 shadow-md
              hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer float-animation"
            >
              <img src={amazonPay} alt="Amazon Pay" className="w-[70%]" />
            </div>
          </div>

          {/* Bottom center icon - Meta */}
          <div
            className="w-20 md:w-30 h-20 md:h-30 rounded-full border-[3px] border-red-500 flex items-center justify-center bg-red-100 shadow-md
            hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer float-animation"
          >
            <img src={metaverse} alt="Meta" className="w-[200%]" />
          </div>
        </div>

        {/* Center Content */}
        <div
          className="text-center max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="text-lg md:text-5xl font-semibold text-red-600 mb-1">
            Accelerate your SALES
          </h2>
          <h2 className="text-lg md:text-4xl font-semibold text-red-600 mb-1">
            with
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold text-red-600 mb-6">
            SUPRANS
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-full border-2 border-black hover:bg-red-600 transition transform hover:scale-105 duration-300">
              Watch How
            </button>
<Link
  to="/videocall"
  className="border-2 border-red-500 text-red-600 px-5 py-2 rounded-full 
             hover:bg-red-100 transition transform hover:scale-105 duration-300 inline-block"
>
  Schedule a Personal VideoCall Now!
</Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default SalesAccelerator;
