
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cantonfairphoto from "../../assets/images/cantondron.png";

export default function CantonFair({onButtonClick}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative text-center py-12 px-4 sm:px-6 overflow-hidden">
      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl font-bold text-red-600 relative z-10"
        data-aos="fade-down"
      >
        CANTON FAIR
      </h1>
      <p
        className="text-lg sm:text-xl font-semibold text-black mt-1 relative z-10"
        data-aos="fade-up"
      >
        CHINA
      </p>

      {/* Red Connector Lines (desktop only) */}
      <div className="absolute top-[22%] left-[-4%] w-[500px] h-[8px] bg-red-600 rotate-[25deg] z-10 hidden sm:block"></div>
      <div className="absolute top-[22%] right-[-4%] w-[500px] h-[8px] bg-red-600 -rotate-[25deg] z-10 hidden sm:block"></div>
      <div className="absolute bottom-[22%] left-[-11%] w-[500px] h-[8px] bg-red-600 -rotate-[25deg] z-10 hidden sm:block"></div>
      <div className="absolute bottom-[22%] right-[-11%] w-[500px] h-[8px] bg-red-600 rotate-[25deg] z-10 hidden sm:block"></div>

      {/* Curved image banner */}
      <div
        className="relative mt-8 mx-auto w-full max-w-[1000px] h-69 sm:h-92 bg-gray-200 rounded-[50%/10%] border-2 border-red-600 flex items-center justify-center shadow-xl z-20 overflow-hidden"
        data-aos="zoom-in"
      >
        <img
          src={Cantonfairphoto}
          alt="Canton Fair"
          className="w-full h-full object-cover rounded-[50%/10%]"
        />
      </div>

      {/* Subtitle */}
      <h2
        className="mt-8 text-red-600 font-bold text-lg sm:text-xl relative z-10"
        data-aos="fade-up"
      >
        Join Now!
      </h2>
      <p
        className="text-black font-medium text-sm sm:text-base relative z-10"
        data-aos="fade-up"
      >
        SUPRANS Biggest International Business Delegation
      </p>

      {/* Buttons */}
      <div
        className="flex flex-col sm:flex-row justify-center gap-4 mt-8 relative z-10"
        data-aos="fade-up"
      >
   
          <button onClick={onButtonClick} className="flex items-center justify-center gap-2 px-6 py-2 text-sm sm:text-base font-semibold text-red-600 border border-red-600 rounded-full transition transform hover:scale-105 hover:bg-red-50 active:scale-95">
            Book Now! <ArrowRight size={18} />
          </button>
        

        {/* Smooth scroll to PlanCards */}
        <button
          onClick={scrollToPlans}
          className="flex items-center justify-center gap-2 px-6 py-2 text-sm sm:text-base font-semibold text-white bg-red-600 rounded-full transition transform hover:scale-105 hover:bg-red-700 active:scale-95 shadow-md"
          aria-label="View Packages"
        >
          View Packages <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
