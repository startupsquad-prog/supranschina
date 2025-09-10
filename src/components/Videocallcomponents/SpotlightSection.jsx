
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Shake from "../../assets/images/shakehand.png";

const SpotlightSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .floating {
          animation: floatUpDown 4s ease-in-out infinite;
        }
        .btn-hover:hover {
          transform: scale(1.05);
          background-color: #b91c1c; /* Tailwind's red-700 */
          box-shadow: 0 8px 15px rgba(185, 28, 28, 0.4);
        }
      `}</style>

      <div
        className="bg-[#FFDCDC] rounded-4xl px-4 sm:px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-10 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-4 leading-snug">
            Ready to shine the spotlight{" "}
            <br className="hidden md:block" />
            on your company?
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Reach us if you have a business idea that offers incredible future
            growth and value. We’d love to be a part of your dream.
          </p>
<a
  href="https://connect.suprans.in/#/customer/lumbeeinternationalpvtltd"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="px-5 sm:px-6 py-2 border-2 border-red-600 text-red-600 rounded-full 
               transition-all flex items-center gap-2 mx-auto md:mx-0 btn-hover"
  >
    Book a 1:1 Video Call
    <span className="text-lg sm:text-xl">➡️</span>
  </button>
</a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={Shake}
            alt="Handshake Illustration"
            className="w-56 sm:w-72 md:max-w-[440px] h-auto floating"
          />
        </div>
      </div>
      <div className="pb-10"></div>
    </>
  );
};

export default SpotlightSection;
