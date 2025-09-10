
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DigitalProductFreedom() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Floating + Hover Animation */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .float-animation {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <div
        className="bg-gradient-to-b from-[#350000] to-[#730000] flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 text-white font-sans"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="max-w-xl space-y-6" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            You’re building the right{" "}
            <span className="text-white">path — digital products set you free</span>
          </h1>

          <ul className="space-y-4 text-2xl">
            <li className="flex items-start" data-aos="fade-up" data-aos-delay="100">
              <span className="text-green-400 mr-3 text-3xl">✔</span>
              You earn without clocking in or out — income flows even when you rest.
            </li>
            <li className="flex items-start" data-aos="fade-up" data-aos-delay="200">
              <span className="text-green-400 mr-3 text-3xl">✔</span>
              Your time is yours — work from anywhere, whenever you choose.
            </li>
            <li className="flex items-start" data-aos="fade-up" data-aos-delay="300">
              <span className="text-green-400 mr-3 text-3xl">✔</span>
              No manager, no meetings, just complete focus on your vision.
            </li>
            <li className="flex items-start" data-aos="fade-up" data-aos-delay="400">
              <span className="text-green-400 mr-3 text-3xl">✔</span>
              Your growth depends on creativity, not hours worked.
            </li>
          </ul>
        </div>

       
      </div>
    </>
  );
}
