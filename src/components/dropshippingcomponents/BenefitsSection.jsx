
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
     import { Link } from "react-router-dom";
import shopifyLogo from "../../assets/images/s.jpg"; 
import badge from "../../assets/images/s2.jpeg"; 
import avatar1 from "../../assets/images/store.png"; 
import avatar2 from "../../assets/images/store.png"; 
import avatar3 from "../../assets/images/store.png"; 

const BenefitsSection = ({ onButtonClick }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-[#350000] text-white py-12">

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 px-4 text-center">
        {["Earn while you sleep", "Scale without stress", "Get your time back"].map((text, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // alternating animation
            className="border border-white rounded-xl p-6 w-full md:w-1/4 max-w-sm mx-auto 
                       hover:scale-105 hover:border-red-500 transition-transform duration-300 cursor-pointer"
          >
            <p className="text-lg font-medium">{text}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-12" data-aos="zoom-in" data-aos-delay="300">


<button
  onClick={onButtonClick} // parent handler to open modal
  className="bg-white text-red-600 font-semibold text-lg py-3 px-6 rounded-2xl border-2 border-red-500 
             hover:bg-red-100 hover:text-red-700 transition-colors duration-300 inline-block"
>
  Start Your Journey
</button>

      </div>

      {/* Partner & Community Section */}
      <div
        className="bg-gray-100 text-black py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 md:h-40"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Left: Logos */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <img src={shopifyLogo} alt="Shopify" className="h-12 md:h-16 object-contain" />
          <img src={badge} alt="Badge" className="h-16 md:h-20 object-contain" />
        </div>

        {/* Divider (only on desktop) */}
        <div className="hidden md:block w-px h-20 bg-gray-400 mx-6" />

        {/* Right: Avatars + Text */}
        <div className="flex items-center gap-4 flex-wrap justify-center text-center md:text-left">
          <div className="flex -space-x-2">
            <img src={avatar1} alt="avatar1" className="h-8 w-8 rounded-full border-2 border-white" />
            <img src={avatar2} alt="avatar2" className="h-8 w-8 rounded-full border-2 border-white" />
            <img src={avatar3} alt="avatar3" className="h-8 w-8 rounded-full border-2 border-white" />
          </div>
          <p className="text-lg md:text-2xl leading-snug">
            Join our community of <span className="text-red-600 font-bold text-lg md:text-2xl">1M+ Happy Customers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
