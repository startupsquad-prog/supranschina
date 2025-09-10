
import React, { useEffect } from "react";
import officeImage1 from "../../assets/images/sir1.jpeg";
import officeImage2 from "../../assets/images/x1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#330000] to-[#350000] text-white py-10 px-4 sm:px-6 space-y-20">

      {/* First block */}
      <div
        className="flex flex-col md:flex-row items-center gap-8"
        data-aos="fade-right"
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 max-w-md group cursor-pointer mx-auto md:ml-20">
          <div className="absolute -top-3 -left-3 w-full h-full bg-red-600 rounded-xl z-0 transition-transform duration-500 group-hover:scale-105" />
          <div className="relative bg-black rounded-xl overflow-hidden border border-white z-10 transition-transform duration-500 group-hover:scale-105">
            <img
              src={officeImage1}
              alt="Office 1"
              className="w-full h-[220px] sm:h-[250px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Winning products</h2>
          <p className="text-base sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0">
            Our AI store builder loads your store with 10 proven winning products to start selling instantly.
          </p>
        </div>
      </div>

      {/* Second block */}
      <div
        className="flex flex-col md:flex-row-reverse items-center gap-8"
        data-aos="fade-left"
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 max-w-md group cursor-pointer mx-auto md:mr-20">
          <div className="absolute -top-3 -right-3 w-full h-full bg-red-600 rounded-xl z-0 transition-transform duration-500 group-hover:scale-105" />
          <div className="relative bg-black rounded-xl overflow-hidden border border-white z-10 transition-transform duration-500 group-hover:scale-105">
            <img
              src={officeImage2}
              alt="Office 2"
              className="w-full h-[220px] sm:h-[300px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to use website</h2>
          <p className="text-base sm:text-xl md:text-2xl max-w-md mx-auto md:mx-0">
            Get your own AI-powered online store in just a few clicks.
          </p>
        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;
