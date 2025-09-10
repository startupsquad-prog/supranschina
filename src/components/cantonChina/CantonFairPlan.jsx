
import React, { useEffect } from "react";
import tabletFrame from "../../assets/images/tablet.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SmartIncomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="text-white py-6 flex flex-col items-center px-4 text-center"
      data-aos="fade-up"
    >
      {/* Tablet with YouTube Video */}
      <div className="relative max-w-7xl w-full flex justify-center">
        {/* Tablet Frame */}
        <img
          src={tabletFrame}
          alt="Tablet Frame"
          className="w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1000px] rounded-xl mx-auto"
        />

        {/* YouTube Video Positioned Inside Screen */}
        <div className="absolute top-[8%] left-[15%] w-[70%] h-[82%] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tsPhXupll4M?start=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SmartIncomeSection;
