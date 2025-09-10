
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsletterSubscribe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-red-600 py-10 flex justify-center items-center px-4"
      data-aos="fade-up"
    >
      <div className="bg-white rounded-2xl shadow-md px-6 py-6 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-6">
        {/* Left Text */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Subscribe to the newsletter
          </h2>
          <p className="text-sm sm:text-lg text-gray-500">
            Subscribe to Suprans to get information and updates on time
          </p>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-72 px-4 py-2 border-2 border-red-400 bg-red-100 rounded-full text-sm focus:outline-none"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-red-700 hover:scale-105 transition transform w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
