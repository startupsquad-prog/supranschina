import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../../assets/images/main.jpeg";
import Google from "../../assets/images/Google.jpeg";
import Trustpilot from "../../assets/images/Trustpilot.jpeg";
import insta from "../../assets/images/123.png";
import { Link } from "react-router-dom";

export const Hero = ({ onScrollToServices }) => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="text-center py-1 px-4 bg-white" data-aos="fade-up">
      {/* Floating animation style */}
      <style>
        {`
          @keyframes floating {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          .floating {
            animation: floating 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Card and Badge */}
      <div className="flex flex-col items-center">
        <div
          className="relative w-[235px] h-[230px] cursor-pointer [perspective:1000px] floating"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Card inner */}
          <div
            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full rounded-xl shadow-lg [backface-visibility:hidden]">
              <img
                src={main}
                alt="center"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Back */}
          {/* Back */}
<div className="absolute w-full h-full rounded-xl border-2 border-red-600 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
  <img
    src={insta}
    alt="Instagram"
    className="w-full h-full object-cover rounded-xl"
  />
</div>

          </div>
        </div>

        {/* Badge */}
        <span className="mt-1 bg-red-100 text-red-600 font-semibold text-2xl px-4 py-1 rounded-2xl">
          2025 #1 Business Development Platform
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-semibold mt-2">
        You Dream it. We Built it
      </h1>
      <h2 className="text-3xl mt-1">
        with <span className="text-red-600 font-bold text-4xl">SUPRANS</span>
      </h2>

      {/* Subtext */}
      <p className="mt-2 max-w-3xl mx-auto text-gray-700 text-base md:text-lg">
        Guiding{" "}
        <span className="text-blue-600 font-semibold">1000+ entrepreneurs</span>{" "}
        across India and abroad to launch profitable, legally structured, and
        scalable global businesses — with hands–on guidance and systems that
        work.
      </p>

      {/* Reviews */}
      <div className="mt-3 flex justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <img src={Trustpilot} alt="Trustpilot" className="h-18" />
        </div>
        <div className="flex items-center gap-2">
          <img src={Google} alt="Google Reviews" className="h-20" />
        </div>
      </div>

      <div className="mt-4 mb-10 flex justify-center gap-4 flex-wrap">
    
        <Link
  to="/videocall"
  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl inline-block"
>
  Book a 1:1 VideoCall Now!
</Link>

        {/* Checkout services button -> scroll trigger */}
        <button
          onClick={onScrollToServices}
          className="border border-red-500 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          CheckOut Services
        </button>
      </div>
    </section>
  );
};
