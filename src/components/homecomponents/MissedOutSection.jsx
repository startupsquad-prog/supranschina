
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/start.jpeg";
import img2 from "../../assets/images/gem.jpeg";
import img3 from "../../assets/images/trust.jpeg";
import img4 from "../../assets/images/tata.jpeg";

export default function MissedOutSection({onButtonClick}) {
  const logos = [img1, img2, img3, img4];

  return (
    <>
      <style>{`
        /* Removed bounce animation */
        /* Scrollbar styles for mobile */
        .scrollbar-x {
          scrollbar-width: auto; /* Firefox */
          scrollbar-color: #cbd5e0 #f1f5f9; /* thumb and track */
        }
        .scrollbar-x::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-x::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .scrollbar-x::-webkit-scrollbar-thumb {
          background-color: #cbd5e0;
          border-radius: 3px;
        }
      `}</style>

      <div className="text-center py-10 px-4 sm:px-6 md:px-12 bg-white">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4">
          <span className="text-red-600 font-semibold">Missed</span> out?
        </h2>

        {/* Call to Action Button */}
         <button
      type="button"
      onClick={onButtonClick}
      className="inline-block bg-red-500 text-white font-medium px-6 sm:px-10 py-3 rounded-xl shadow-md border-2 border-white hover:bg-red-600 transition mb-10 text-base sm:text-xl text-center w-full sm:w-auto"
    >
      Join Now! The Asia’s Biggest Seminar for Business all around the world
    </button>
        {/* Desktop logos grid - visible md and up */}
        <div className="hidden md:flex mt-10 flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16">
          {logos.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-2 sm:p-3 shadow-sm hover:shadow-md transition"
            >
              <img
                src={img}
                alt={`support-logo-${index}`}
                className="h-14 sm:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile horizontal scroll - visible only on small screens */}
        <div
          className="md:hidden mt-10 flex overflow-x-auto scrollbar-x space-x-4 px-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {logos.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition flex-shrink-0"
              style={{ scrollSnapAlign: "start", minWidth: "120px" }}
            >
              <img
                src={img}
                alt={`support-logo-mobile-${index}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
