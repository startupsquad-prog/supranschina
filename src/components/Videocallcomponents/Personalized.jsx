
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Personalized = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes floatPulse {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          .floating-btn {
            animation: floatPulse 4s ease-in-out infinite;
          }

          .play-hover:hover {
            transform: scale(1.15);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .play-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        `}
      </style>

      <div className="bg-white py-12 px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2"
          data-aos="fade-up"
        >
          Personalized <span className="text-red-600 font-bold">VIDEO</span> Call
        </h2>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Direct guidance from experts tailored to your needs.
        </p>

        {/* Video Placeholder */}
        <div
          className="w-full max-w-5xl aspect-video bg-gray-300 rounded-lg flex items-center justify-center relative"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Play Button */}
          <button className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md floating-btn play-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
