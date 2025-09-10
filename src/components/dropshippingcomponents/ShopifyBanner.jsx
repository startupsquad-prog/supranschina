
import React, { useEffect } from "react";
import shopifyLogo from "../../assets/images/bagsopify.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function ShopifyBanner({onButtonClick}) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* ✅ Desktop Layout */}
      <div
        className="hidden md:flex bg-[#52763e] w-full items-center justify-between px-16 py-6 text-white"
        data-aos="fade-up"
      >
        {/* Left Text */}
        <div
          className="flex flex-col text-left text-4xl font-medium leading-tight"
          data-aos="fade-right"
        >
          <span>Built Your</span>
          <span className="font-bold text-white">
            <span className="text-[#96d000]">SHOPIFY</span> Store
          </span>
          <span className="font-semibold">NOW!!</span>
        </div>

        {/* Center Logo & Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={shopifyLogo}
            alt="Shopify Logo"
            className="w-32 max-h-20 object-contain transition-transform duration-500 hover:rotate-6 hover:scale-110"
          />
          <span className="text-black font-bold text-6xl transition-colors duration-500 hover:text-[#96d000]">
            shopify <span className="font-normal italic">partners</span>
          </span>
        </div>

        {/* Right Button */}
        <div
          className="flex flex-col items-end text-right"
          data-aos="fade-left"
        >
          <span className="text-lg mb-2">
            Build Your Store With Us For Absolutely FREE
          </span>
         <button
  onClick={onButtonClick} // parent handler to open modal
  className="bg-white text-[#4f6f3e] text-[15px] px-5 py-2 rounded-full font-medium transition duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md whitespace-nowrap"
>
  Start Your Business →
</button>
        </div>
      </div>

      {/* ✅ Mobile Layout - Compact Horizontal Banner */}
      <div
        className="md:hidden flex bg-[#52763e] w-full items-center justify-between px-4 py-3 text-white"
        data-aos="fade-up"
      >
        {/* Left Text */}
        <div className="flex flex-col text-left text-xs font-semibold leading-snug w-[30%]">
          <span>Build Your</span>
          <span>
            <span className="text-[#96d000] font-bold">Shopify</span> Store
          </span>
          <span>Now!</span>
        </div>

        {/* Center Logo */}
        <div className="w-[25%] flex justify-center">
          <img
            src={shopifyLogo}
            alt="Shopify Logo"
            className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Button */}
        <div className="w-[40%] flex justify-end">
       <button
  onClick={onButtonClick} // parent handler to open modal
  className="bg-white text-[#4f6f3e] text-[10px] px-3 py-1 rounded-full font-medium transition duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md whitespace-nowrap"
>
  Start Your Business →
</button>
        </div>
      </div>
    </>
  );
}
