
import React from "react";
import WatchPhoto from "../../assets/images/5.png";

export default function Watchphotovideo() {
  return (
    <>
      {/* ✅ Desktop View */}
      <div className="hidden md:block text-center mt-9">
        <p className="font-bold text-5xl mb-4">
          Get a <span className="text-red-600">3D Experience</span>
        </p>
        <p className="font-semibold mb-8">
          Experience every angle of Perfection
        </p>
        <img className="h-110 w-450 mx-auto" src={WatchPhoto} alt="3D Watch" />
      </div>

      {/* ✅ Mobile View */}
      <div className="block md:hidden text-center mt-6 px-4">
        <p className="font-bold text-3xl mb-3">
          Get a <span className="text-red-600">3D Experience</span>
        </p>
        <p className="font-medium mb-6 text-base">
          Experience every angle of Perfection
        </p>
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={WatchPhoto}
          alt="3D Watch"
        />
      </div>
    </>
  );
}
