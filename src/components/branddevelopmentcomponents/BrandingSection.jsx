import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const BrandingSection = ({onButtonClick}) => {



  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-center py-12 bg-white px-4">
      {/* Headings */}
      <h2
        className="text-2xl sm:text-4xl md:text-6xl font-bold text-black leading-tight"
        data-aos="fade-up"
      >
        Build a{" "}
        <span className="text-red-600 inline-flex items-center">
          BRAND
          <span className="text-green-500 text-xl sm:text-2xl md:text-4xl ml-1">
            ✔
          </span>
        </span>
      </h2>

      <h2
        className="text-2xl sm:text-4xl md:text-6xl font-bold text-black mt-2 leading-tight mb-7"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Not just a Business
        <span className="text-red-500 text-xl sm:text-2xl md:text-3xl ml-1 ">
          ✘
        </span>
      </h2>

      {/* Button */}
 <button
  onClick={onButtonClick} // trigger modal open from parent
  className="mt-8 border-2 border-red-500 text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium 
             text-sm sm:text-lg md:text-2xl shadow-md hover:bg-red-100 hover:scale-105 
             transition transform duration-300"
  data-aos="fade-up"
  data-aos-delay="400"
>
  Allow us to help you in your journey
</button>
    </div>
  );
};

export default BrandingSection;
