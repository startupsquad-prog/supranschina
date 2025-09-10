
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import watchImage from "../../assets/images/watchmain.png";

const ProductCard = ({onButtonClick}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-red-700 to-orange-500 min-h-screen text-white p-4 sm:p-6 flex items-center justify-center">
      <div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center md:items-start gap-4 md:col-span-1">
          <img
            src={watchImage}
            alt="Suprans Watch"
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <div
            className="flex items-center gap-3 text-lg sm:text-xl font-bold"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span className="text-yellow-400 text-3xl sm:text-5xl md:text-6xl">★★★★★</span>
            <span className="text-3xl sm:text-5xl md:text-6xl">4.8</span>
          </div>
        </div>

        <div className="space-y-6 md:col-span-2">
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Suprans Mechanical Watch
          </h2>
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-100"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            $129.89
          </p>
          <div
            className="flex flex-wrap items-center gap-3"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <span className="font-semibold text-lg sm:text-xl md:text-2xl">QTY:</span>
            <select className="bg-black border border-gray-500 rounded-md px-3 py-1 focus:outline-none focus:border-red-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div
            className="flex flex-wrap items-center gap-3"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span className="font-semibold text-lg sm:text-xl md:text-2xl">Strap SIZE:</span>
            <div className="flex gap-2">
              {["XS", "S", "M", "L"].map((size, i) => (
                <button
                  key={i}
                  className="border border-gray-400 bg-white/10 text-white px-3 py-1 rounded-md hover:bg-orange-600 hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
       <button
  onClick={onButtonClick} // <-- triggers modal
  className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold 
             px-6 py-3 rounded-md shadow-lg hover:from-orange-600 hover:to-red-600 
             transition-all w-full sm:w-auto"
>
  BUY NOW
</button>
          </div>
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
              DESCRIPTION
            </h3>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              With its vibrant orange strap and precision mechanical movement,
              LA BELLA MONTE blends modern style with timeless craftsmanship.
            </p>
            <p className="text-center text-gray-300 text-sm sm:text-base">
              Making every second a statement.
            </p>
          </div>
          {[ 
            { label: "Warranty", value: "1 year" },
            { label: "Water Resistant", value: "30 Mins" },
            { label: "Strap Material", value: "High Quality Rubber" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between border-t border-gray-400 pt-3 text-gray-300 gap-4"
              data-aos="fade-up"
              data-aos-delay={800 + idx * 100}
            >
              <p className="font-semibold text-white text-xl sm:text-2xl">
                {item.label}
              </p>
              <p className="font-semibold text-white text-xl sm:text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
