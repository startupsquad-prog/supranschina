
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Business from "../../assets/images/business6.png";
import Business2 from "../../assets/images/business2.JPG";

export default function EasyBrandSteps() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <style>
        {`
          .hover-tilt {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .hover-tilt:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
          }

          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          .floating {
            animation: floatUpDown 4s ease-in-out infinite;
          }
        `}
      </style>

      <section className="bg-gradient-to-b from-[#730000] to-[#F61C0D] pt-7 pb-16 px-4 text-white text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold mb-2"
          data-aos="fade-down"
        >
          Building Brand is <span className="text-white">EAZZYYYYY!!</span>
        </h2>
        <p
          className="text-xl md:text-3xl font-semibold mb-12"
          data-aos="fade-up"
        >
          in just <span className="text-white font-bold text-4xl">2 STEPS</span>
        </p>

        {/* Steps Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative pt-8">
          {/* Step 1 Card */}
          <div
            className="bg-black text-black w-74 h-90 rounded-2xl p-4 
              md:-rotate-[10deg] hover-tilt floating"
            data-aos="flip-left"
          >
            <div className="bg-white rounded-xl h-full p-4 flex flex-col items-center justify-center">
              <img
                src={Business}
                alt="Step 1"
                className="w-52 h-32 object-cover rounded-md bg-gray-300 mb-6"
              />
              <h3 className="text-md font-semibold mb-2 text-center">
                1. Fill Out the form with your Information
              </h3>
              <p className="text-sm text-center text-gray-600">
                Complete our online form with your personal and company details.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div
            className="bg-white text-red-600 text-3xl w-12 h-12 rounded-full flex items-center justify-center z-10 my-4 md:my-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            →
          </div>

          {/* Step 2 Card */}
          <div
            className="bg-black text-black w-74 h-90 rounded-2xl p-4 
              md:rotate-[10deg] hover-tilt floating"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-xl h-full p-4 flex flex-col items-center justify-center">
              <img
                src={Business2}
                alt="Step 2"
                className="w-52 h-32 object-cover rounded-md bg-gray-300 mb-6"
              />
              <h3 className="text-md font-semibold mb-2 text-center">
                2. Let Us Handle the Rest and you just relax
              </h3>
              <p className="text-sm text-center text-gray-600">
                Complete our online form with your personal and company details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
