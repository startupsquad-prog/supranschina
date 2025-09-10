

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import founderImage from "../../assets/images/sirp.JPG"; // Replace with your image path

export default function FoundersNote() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      className="bg-red-600 text-white py-12 px-6 md:px-20"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Side: Circular Image with hover effect */}
        <div className="flex-shrink-0">
          <img
            src={founderImage}
            alt="Founder"
            className="w-[200px] h-[200px] rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center md:text-left max-w-3xl md:ml-8">
          <h2 className="text-5xl font-bold uppercase mb-4 text-center md:text-left">
            FOUNDER’S Note
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            When I started Suprans, it wasn’t just about building a service — it
            was about creating a space where ambition meets action. Every brand,
            every product, and every idea we touch is a reflection of that
            belief. Suprans exists to empower people like you — risk-takers,
            dreamers, and doers — to turn visions into thriving realities. This
            is just the beginning. Let’s build something remarkable together.
          </p>
          <p className="mt-4 font-semibold text-sm md:text-base text-right">
            –Founder, SUPRANS
          </p>
        </div>
      </div>
    </div>
  );
}
