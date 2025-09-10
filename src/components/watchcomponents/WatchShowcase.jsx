
import { Link } from "react-router-dom";
import React from "react";
import watchImage from "../../assets/images/watchmain.png"; // Update path if needed

const WatchShowcase = ({ scrollToForm , onButtonClick}) => {
  return (
    <div className="w-full bg-white">
      {/* Top pink bar */}
      <div className="w-full h-1 bg-pink-100"></div>

      {/* Centered Title */}
      <div className="text-center mt-3">
        <h1 className="text-red-600 text-4xl font-bold">SUPRANS</h1>
        <p className="text-2xl mt-1">presents</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 gap-10 mt-8 mb-0">
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2 md:ml-20">
          <h2 className="text-5xl font-medium mb-1">The</h2>
          <h2 className="text-5xl font-bold mb-2">MECHANICAL Mastery</h2>

          <h1 className="text-7xl font-extrabold text-yellow-400 drop-shadow-md italic mb-6">
            <span className="text-black/70">La Bella Monte...</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* BUY NOW scrolls to form */}
            <button
              onClick={scrollToForm}
              className="bg-white text-red-600 border border-red-600 px-5 py-3 rounded-full font-semibold hover:bg-red-50 transition flex items-center gap-2"
            >
              <span>BUY NOW</span>
              <span>➡️</span>
            </button>

            {/* Enquire button goes to separate page */}
           <button
  onClick={onButtonClick} // open modal from parent
  className="bg-red-600 text-white px-5 py-3 rounded-full font-semibold 
             hover:bg-red-700 transition flex items-center gap-2"
>
  <span>Enquire about product</span>
  <span>➡️</span>
</button>

          </div>
        </div>

        {/* Watch Image */}
        <div className="w-60 md:w-1/2 flex justify-center">
          <img
            src={watchImage}
            alt="Watch"
            className="w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchShowcase;
