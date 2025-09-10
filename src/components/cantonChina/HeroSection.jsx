import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rectangle from "../../assets/images/Rectanglerobot.png";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 👇 Inline Floating Animation Styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .floating {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      <section className="relative bg-white text-gray-900 min-h-screen flex flex-col justify-center items-center px-6 py- text-center overflow-hidden">
        
        {/* Floating Rectangles */}
        <img
          src={rectangle}
          alt="Floating Left"
          className="hidden lg:block absolute left-35 top-60 transform -translate-y-1/2 -translate-x-1/3 w-64 drop-shadow-2xl rotate-[-6deg] z-0 floating"
          data-aos="fade-right"
        />
        <img
          src={rectangle}
          alt="Floating Right"
          className="hidden lg:block absolute right-35 top-60 transform -translate-y-1/2 translate-x-1/3 w-64 drop-shadow-2xl rotate-[6deg] z-0 floating"
          data-aos="fade-left"
        />

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 z-10">
          <span className="text-sm border border-red-600 text-red-600 px-4 py-1 rounded-full font-medium">
            👨‍💼 Mr. Suprans-led
          </span>
          <span className="text-sm border border-red-600 text-red-600 px-4 py-1 rounded-full font-medium">
            🇮🇳 200+ Indians Guided
          </span>
          <span className="text-sm border border-red-600 text-red-600 px-4 py-1 rounded-full font-medium">
            🛂 Visa & Hotel Support
          </span>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl z-10"
        >
          <span className="text-red-600">China Sourcing</span>, Done With{" "}
          <span className="text-gray-800">Experts</span>
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl z-10"
        >
          Join India’s most pragmatic{" "}
          <span className="font-semibold text-red-600">Business Delegation</span> to{" "}
          <span className="font-semibold">3 Mega Trade Fairs</span> in 6 Days.
        </p>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base text-gray-500 max-w-2xl mb-10 z-10"
        >
          Meet verified Chinese manufacturers, build global partnerships, and bring back deals
          that grow your business. Trusted by over{" "}
          <span className="font-semibold text-gray-800">200+ Indian entrepreneurs</span>.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row gap-5 mb-12 z-10"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition"
          >
            📞 Talk to Expert
          </a>
          <a
            href="https://wa.me/your-number"
            className="px-8 py-4 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition"
          >
            💬 WhatsApp Now
          </a>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 w-full max-w-3xl my-2 z-10" />

        {/* Payment Info */}
        <div data-aos="fade-up" data-aos-delay="800" className="z-10">
          <p className="text-sm text-gray-500 mb-3">Secure payments powered by</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://razorpay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Razorpay
            </a>
            <a
              href="/refund-policy"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
