import React, { useEffect } from "react";
import Sipper from "../../assets/images/drop111.png";
import Sipper2 from "../../assets/images/drop1.png";
import Chinaoffice from "../../assets/images/chinaoffice.png";
import Chinaoffice2 from "../../assets/images/brand3.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-12 px-4 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        <span className="text-red-600">What</span> we do ?
      </h2>

      {/* First Grid - fade-right */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-4"
        data-aos="fade-right"
      >
        {/* Card 1 */}
        <div className="relative rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src={Sipper2}
            alt="Dropshipping"
            className="w-full h-53 object-cover"
          />
          <span className="absolute top-0 left-[55px] bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-52">
            Dropshipping
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src={Chinaoffice2}
            alt="Brand Development"
            className="w-[90%] ml-20 h-68 object-cover rounded-3xl"
          />
          <span className="absolute top-0 left-20 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Brand Development
          </span>
        </div>
      </div>

      {/* Second Grid - fade-left */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
        data-aos="fade-left"
      >
        {/* Card 2 (Now first - left) */}
        <div className="relative rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src={Chinaoffice}
            alt="Brand Development"
            className="w-[90%] ml-20 h-auto object-cover rounded-3xl"
          />
          <span className="absolute bottom-7 left-[75px] bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Brand Development
          </span>
        </div>

        {/* Card 1 (Now second - right) */}
        <div className="relative rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            src={Sipper}
            alt="Dropshipping"
            className="w-full h-53 object-cover"
          />
          <span className="absolute bottom-0 left-[55px] bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-50">
            Dropshipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
