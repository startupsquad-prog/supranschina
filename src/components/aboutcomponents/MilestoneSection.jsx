
import React, { useEffect } from "react";
import Laptop from "../../assets/images/mac.png"; // Replace with your actual path
import AOS from "aos";
import "aos/dist/aos.css";

const MilestoneSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 px-4 text-center bg-white">
      {/* Laptop with video overlay */}
      <div
        className="relative max-w-6xl mx-auto cursor-pointer
                   transition-transform duration-500 ease-in-out
                   hover:scale-105"
        data-aos="fade-up"
      >
        {/* Laptop Image */}
        <img src={Laptop} alt="Laptop" className="w-full rounded-xl shadow-lg" />

        {/* YouTube Video inside laptop screen */}
        <div className="absolute top-[9%] left-[15%] w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-lg border-2 border-red-500">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/03wyV-EFvjg"
            title="Suprans Milestone Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Heading */}
      <h2
        className="text-3xl md:text-6xl font-semibold mt-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Our <span className="text-red-600 font-bold">MILESTONES</span>
      </h2>

      {/* Paragraph */}
      <p
        className="mt-4 max-w-7xl mx-auto text-sm md:text-3xl text-gray-800"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        A journey of bold moves and breakthroughs — here’s how{" "}
        <span className="text-red-600 font-semibold">SUPRANS</span> is growing, step by
        step.
      </p>
    </div>
  );
};

export default MilestoneSection;
