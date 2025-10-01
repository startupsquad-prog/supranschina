
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import iphoneImg from "../../assets/images/iPhone.png";

const PhoneVideoSection = ({onButtonClick}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="flex flex-col items-center space-y-4 sm:space-y-6"
      data-aos="fade-up"
    >
      {/* Phone Frame */}
      <div
        className="relative w-full max-w-[900px] px-4 sm:px-0"
        data-aos="zoom-in-up"
        data-aos-delay="100"
      >
        {/* iPhone Image */}
        <img src={iphoneImg} alt="iPhone" className="w-full h-auto" />

        {/* Video Container */}
        <div className="absolute top-[15%] left-[11%] w-[77%] h-[70%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DKADDGDQirY"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Schedule Button */}
    <button
  onClick={onButtonClick} // parent handler to open modal
  className="border-2 border-red-500 text-red-500 text-base sm:text-lg font-semibold 
             px-10 sm:px-20 py-2 sm:py-3 rounded-full 
             hover:bg-red-500 hover:text-white transition-all 
             w-full sm:w-auto text-center inline-block"
  data-aos="fade-up"
  data-aos-delay="200"
>
  Schedule a Request Now!
</button>

    </div>
  );
};

export default PhoneVideoSection;
