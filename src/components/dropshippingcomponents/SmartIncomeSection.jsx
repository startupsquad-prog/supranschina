
import React, { useEffect } from "react";
import tabletFrame from "../../assets/images/tablet.png"; // Tablet image with screen
import AOS from "aos";
import "aos/dist/aos.css";

const SmartIncomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-black to-black text-white py-6 flex flex-col items-center px-4 text-center"
      data-aos="fade-up"
    >
      {/* Tablet with YouTube Video */}
      <div className="relative max-w-3xl w-full">
        {/* Tablet Frame */}
        <img
          src={tabletFrame}
          alt="Tablet Frame"
          className="w-full rounded-xl border border-gray-700"
        />

        {/* YouTube Video Positioned Inside Screen */}
        <div className="absolute top-[8%] left-[6%] w-[89%] h-[82%] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Rlvtg6cmQ3w"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Headline */}
     

      {/* Subtext */}
     
    </div>
  );
};

export default SmartIncomeSection;
