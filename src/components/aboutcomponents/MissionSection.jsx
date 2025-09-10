import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const MissionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-center py-4 px-4 pt-20 bg-white">
      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-bold mb-6"
        data-aos="fade-down"
      >
        Our <span className="text-red-600">MISSION</span>
      </h2>

      {/* Paragraph */}
      <p
        className="max-w-6xl mx-auto text-gray-800 text-base md:text-2xl leading-relaxed"
        data-aos="fade-up"
      >
        At <span className="text-red-600 font-medium">Suprans</span>, our mission is to empower individuals and businesses to
        build bold, meaningful brands. We combine strategy, creativity, and
        technology to deliver solutions that not only stand out but also drive
        lasting impact.
      </p>

      {/* CTA Button */}
      <div className="mt-8" data-aos="zoom-in">
      <Link
  to="/contactform1"
  className="text-red-600 border border-red-600 px-5 py-2 rounded-full font-medium 
             hover:bg-red-600 hover:text-white transition flex items-center gap-2 
             mx-auto hover:scale-105 duration-300 w-56"
>
  Build your Dream <span className="text-xl">→</span>
</Link>
      </div>
    </div>
  );
};

export default MissionSection;
