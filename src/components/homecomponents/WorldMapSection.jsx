import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import worldMap from "../../assets/images/g5.png";
import usaOffice from "../../assets/images/building.jpeg";
import indiaOffice from "../../assets/images/corporate.jpeg";
import chinaWarehouse from "../../assets/images/Warehousechina.png";

export default function WorldMapSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-10 flex flex-col items-center relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Our <span className="text-red-600 font-bold">BUSINESS</span> is expanded around the world
      </h2>

      {/* Map Image */}
      <div className="relative w-full max-w-5xl">
        <img src={worldMap} alt="World Map" className="w-full object-contain" />

        {/* Blinking Red Dots */}
        <div className="absolute top-[30%] left-[16%] w-4 h-4 rounded-full bg-red-600 animate-blink z-10" />
        <div className="absolute top-[38%] left-[68.5%] w-4 h-4 rounded-full bg-red-600 animate-blink z-10" />
        <div className="absolute top-[35%] left-[78.5%] w-4 h-4 rounded-full bg-red-600 animate-blink z-10" />

        {/* USA Card */}
        <div
          className="hidden md:block absolute top-[-15%] left-[6%]"
          data-aos="fade-up-right"
        >
          <div className="absolute top-[140px] left-[-270px] bg-white rounded-xl shadow-lg border border-red-400 p-3 w-64 z-20">
            <img src={usaOffice} alt="USA" className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold text-red-500 mt-2">USA Office</h3>
            <p className="text-xs text-gray-600">
              Location: vti-street-USA <br />
              Our USA office adds a local edge to your global brand.
            </p>
          </div>
        </div>

        {/* India Card */}
        <div
          className="hidden md:block absolute top-[39%] left-[68.5%]"
          data-aos="fade-up"
        >
          <div className="absolute top-[110px] left-[-270px] bg-white rounded-xl shadow-lg border border-red-400 p-3 w-64 z-20">
            <img src={indiaOffice} alt="India" className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold text-red-500 mt-2">India Office</h3>
            <p className="text-xs text-gray-600">
              Mumbai, India <br />
              Our India team provides development and client support.
            </p>
          </div>
        </div>

        {/* China Card */}
        <div
          className="hidden md:block absolute top-[15%] left-[94.5%]"
          data-aos="fade-up-left"
        >
          <div className="absolute top-[110px] left-[30px] bg-white rounded-xl shadow-lg border border-red-400 p-3 w-64 z-20">
            <img src={chinaWarehouse} alt="China" className="w-full h-32 object-cover rounded" />
            <h3 className="font-semibold text-red-500 mt-2">China Warehouse</h3>
            <p className="text-xs text-gray-600">
              Location: Shenzhen <br />
              Efficient fulfillment and logistics for faster delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-6 grid gap-4 md:hidden px-4">
        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-3 w-full" data-aos="fade-up">
          <img src={usaOffice} alt="USA" className="w-full h-32 object-cover rounded" />
          <h3 className="font-semibold text-red-500 mt-2">USA Office</h3>
          <p className="text-sm text-gray-600">
            Location: vti-street-USA <br />
            Our USA office adds a local edge to your global brand.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-3 w-full" data-aos="fade-up" data-aos-delay="100">
          <img src={indiaOffice} alt="India" className="w-full h-32 object-cover rounded" />
          <h3 className="font-semibold text-red-500 mt-2">India Office</h3>
          <p className="text-sm text-gray-600">
            Mumbai, India <br />
            Our India team provides development and client support.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-red-400 p-3 w-full" data-aos="fade-up" data-aos-delay="200">
          <img src={chinaWarehouse} alt="China" className="w-full h-32 object-cover rounded" />
          <h3 className="font-semibold text-red-500 mt-2">China Warehouse</h3>
          <p className="text-sm text-gray-600">
            Location: Shenzhen <br />
            Efficient fulfillment and logistics for faster delivery.
          </p>
        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          .animate-blink {
            animation: blink 1.2s infinite;
          }
        `}
      </style>
    </div>
  );
}
