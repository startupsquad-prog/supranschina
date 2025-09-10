import React, { useEffect } from "react";
import { FaDropbox } from "react-icons/fa";
import { SiGoogletranslate, SiMeta } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

import AmazonPay from "../../assets/images/amazonpay.jpeg";
import Gpay from "../../assets/images/gpayak.jpeg";

const BrandTools = () => {
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
          animation: floatUpDown 3s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center py-10 bg-white mt-10 px-4">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center leading-tight"
          data-aos="fade-up"
        >
          Tools &amp; Software
        </h2>
        <p
          className="text-lg sm:text-2xl md:text-4xl text-black-600 font-semibold mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          used for
        </p>
        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mt-4 leading-tight text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-red-500">Brand</span> Development
        </h1>

        {/* Icons Row */}
        <div
          className="flex flex-wrap justify-center gap-10 sm:gap-16 md:gap-30 mt-10 sm:mt-16 md:mt-20"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          {[
            <SiMeta key="meta" className="text-blue-500 text-6xl sm:text-7xl md:text-8xl" />,
            <FaDropbox key="dropbox" className="text-blue-400 text-6xl sm:text-7xl md:text-8xl" />,
            <img
              key="amazonpay"
              src={AmazonPay}
              alt="Amazon Pay"
              className="w-20 sm:w-28 md:w-36"
            />,
            <SiGoogletranslate key="googletranslate" className="text-blue-500 text-6xl sm:text-7xl md:text-8xl" />,
            <img
              key="gpay"
              src={Gpay}
              alt="Google Pay"
              className="w-20 sm:w-28 md:w-36"
            />,
          ].map((icon, idx) => (
            <div
              key={idx}
              className="floating rounded-full bg-white shadow-lg flex items-center justify-center p-4 cursor-pointer transition transform hover:scale-110 duration-300"
              style={{ width: "96px", height: "96px" }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandTools;
