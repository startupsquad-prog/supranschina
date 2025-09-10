
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookCallSteps = () => {
  const steps = [
    "Fill the Form",
    "Choose a Time slot",
    "Get Confirmation Link",
    "Join the Call",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes floatPulse {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .hover-bubble {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hover-bubble:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
          }

          .floating {
            animation: floatPulse 4s ease-in-out infinite;
          }
        `}
      </style>

      <div className="flex flex-col items-center py-10 px-4">
        {/* Title */}
        <h2
          className="text-3xl md:text-5xl font-semibold text-center mb-10"
          data-aos="zoom-in"
        >
          How to <span className="text-red-600 font-bold">Book</span> a Call
        </h2>

        {/* Steps Container */}
        <div className="w-full max-w-7xl">
          {/* Desktop Horizontal Layout */}
          <div className="hidden md:flex relative items-center justify-between">
            {/* Red Line */}
            <div className="absolute top-9 left-0 right-0 h-3 bg-red-600 z-0" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center z-10 w-1/4"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center hover-bubble ${
                    index === 0
                      ? "bg-white border-4 border-red-600 floating"
                      : "bg-red-600"
                  }`}
                ></div>
                <p className="text-lg md:text-3xl text-center mt-3 px-1 font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Layout */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-full max-w-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 hover-bubble ${
                    index === 0
                      ? "bg-white border-4 border-red-600 floating"
                      : "bg-red-600"
                  }`}
                ></div>
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCallSteps;
