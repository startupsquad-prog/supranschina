
import React, { useState, useEffect } from "react";
import TeamSuprans from "../../assets/images/TeamSuprans.png";
import StarsImage from "../../assets/images/2.png"; // Add your stars image
import LampImage from "../../assets/images/1.png";   // Add your lamp image
import DragonImage from "../../assets/images/3.png"; // Add your dragon image
import PlaneImage from "../../assets/images/4.png"; // Add your plane image
import { Link } from "react-router-dom";

export default function DelegationBanner() {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600); // shake duration 600ms
    }, 2000); // repeat every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#F32222] text-white px-4 md:px-10 py-10 overflow-hidden rounded-xl">
      {/* Decorative Images */}
      {/* Top Left - Stars */}
      <img
        src={StarsImage}
        alt="Stars"
        className="absolute top-4 left-4 w-16 md:w-46"
      />

      {/* Top Right - Lamp */}
      <img
        src={LampImage}
        alt="Lamp"
        className="absolute top-4 right-4 w-10 md:w-46"
      />

      {/* Bottom Left - Plane */}
      <img
        src={PlaneImage}
        alt="Plane"
        className="absolute bottom-4 left-4 w-16 md:w-66"
      />

      {/* Bottom Right - Dragon */}
      <img
        src={DragonImage}
        alt="Dragon"
        className="absolute bottom-4 right-4 w-16 md:w-54"
      />

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-lg md:text-3xl font-bold">
          Biggest International Delegation
        </h2>
        <p className="text-md md:text-2xl text-yellow-300 font-semibold mt-1">
          Experience by Mr. SUPRANS
        </p>
      </div>

      {/* Team Image */}
      <div className="flex justify-center mt-6">
        <img
          src={TeamSuprans}
          alt="Team Suprans"
          className="rounded-xl shadow-lg border-4 border-black max-w-full md:max-w-4xl"
        />
      </div>

      {/* Feature Tags */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-black">
        {[
          "Pre-fair training by Mr. Suprans",
          "Factory & market visits",
          "Direct manufacturer access",
        ].map((feature, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 rounded-full font-medium shadow"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <Link to="/cantonchinatravel">
          <button
            className={`bg-white text-black px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-400 text-lg ${
              isShaking ? "animate-shake" : ""
            }`}
          >
            I WANT TO <span className="text-red-600">JOIN!!</span> ➜
          </button>
        </Link>
      </div>

      {/* Inline shake animation style */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
}
