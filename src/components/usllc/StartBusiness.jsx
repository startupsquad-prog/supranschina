
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BusinessImage from "../../assets/images/dashboard.jpeg"; // Adjust path if needed
import { Link } from "react-router-dom";


export default function StartBusiness({onButtonClick}) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* Left Content */}
        <div
          className="space-y-4 sm:space-y-6 text-center md:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug sm:leading-tight">
            Start Your <span className="text-red-600">U.S. Business</span>
            <br className="hidden sm:block" /> the Right Way
          </h1>
          <p className="text-sm sm:text-md text-red-600">
            Form your LLC in the USA with expert support & zero hassle
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
 <button
  onClick={onButtonClick} // open modal from parent
  className="bg-white text-black border-2 border-red-600 px-5 sm:px-6 py-2 sm:py-3 rounded-full 
             font-medium text-sm sm:text-base hover:bg-red-600 hover:text-white 
             hover:scale-105 transition-transform duration-300 inline-block text-center"
>
  Start Your Business →
</button>
         <a
  href="https://connect.suprans.in/#/lumbeeinternationalpvtltd"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base
             hover:bg-black hover:text-red-600 hover:scale-110 transition-transform duration-300 inline-block text-center"
>
  Book a Personal VideoCall →
</a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full flex justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={BusinessImage}
            alt="Business Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
