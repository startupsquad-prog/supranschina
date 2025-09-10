
import React from "react";

import V1 from "../../assets/images/v1.png";
import V2 from "../../assets/images/v2.png";
import V3 from "../../assets/images/v3.png";
import V4 from "../../assets/images/v4.png";
import V5 from "../../assets/images/v5.png";
import V6 from "../../assets/images/v6.png";
import V7 from "../../assets/images/v7.png";
import V8 from "../../assets/images/v8.png";
import V9 from "../../assets/images/v9.png";
import V10 from "../../assets/images/v10.png";
import V11 from "../../assets/images/v11.png";
import V12 from "../../assets/images/v12.png";
import V13 from "../../assets/images/v13.png";
import V14 from "../../assets/images/v14.png";
import V15 from "../../assets/images/v15.png";
import V16 from "../../assets/images/v16.png";
import V17 from "../../assets/images/v17.png";
import V18 from "../../assets/images/v18.png";
import V19 from "../../assets/images/v19.png";
import V20 from "../../assets/images/v20.png";
import V21 from "../../assets/images/v21.png";
import V22 from "../../assets/images/v22.png";
import V23 from "../../assets/images/v23.png";
import V24 from "../../assets/images/v24.png";
// ✅ Animation Styles
const styles = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .marquee-left {
    animation: scroll-left 40s linear infinite;
  }

  .marquee-right {
    animation: scroll-right 40s linear infinite;
  }

  .marquee-left-slow {
    animation: scroll-left 60s linear infinite;
  }
`;

// 🧱 Reusable Row (Images only)
const ImageRow = ({ images, direction = "left", speed = "normal" }) => {
  const animationClass =
    direction === "left"
      ? speed === "slow"
        ? "marquee-left-slow"
        : "marquee-left"
      : "marquee-right";

  // 🔁 Repeat images 3x for smooth loop
  const loopedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden w-full py-3 sm:py-4">
      <div className={`flex gap-4 sm:gap-11 w-max ${animationClass}`}>
        {loopedImages.map((img, idx) => (
          <div
            key={idx}
            className="w-28 h-36 sm:w-40 sm:h-50 border-2 border-red-500 rounded-lg flex items-center justify-center shrink-0 overflow-hidden bg-black"
          >
            <img
              src={img}
              alt={`image-${idx}`}
              className="w-full h-full object-cover mt-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// 📽️ Main Component
const ImageMarqueeGrid = () => {
  // 🔹 Divide 21 images into 3 rows
  const row1 = [V1, V2, V3, V4, V5, V6, V7,V22];
  const row2 = [V8, V9, V10, V11, V12, V13, V14, V23];
  const row3 = [V15, V16, V17, V18, V19, V20, V21, V24];

  return (
    <div className="bg-white flex flex-col items-center justify-center p-4 sm:p-6 space-y-4">
      <style>{styles}</style>

      {/* Heading */}
      <div className="text-center pb-4 sm:pb-7 pt-4 sm:pt-6">
        <p className="text-2xl sm:text-4xl font-medium text-black leading-snug">
          See{" "}
          <span className="text-red-600 font-semibold">real-time</span>{" "}
          experience of our{" "}
          <span className="text-red-600 font-semibold">customers</span>{" "}
          <span className="inline-block animate-pulse ml-1">
            <span className="text-red-500 text-4xl sm:text-7xl">✨</span>
          </span>
        </p>
      </div>

      {/* Rows */}
      <ImageRow images={row1} direction="left" speed="normal" />
      <ImageRow images={row2} direction="right" speed="normal" />
      <ImageRow images={row3} direction="left" speed="slow" />
    </div>
  );
};

export default ImageMarqueeGrid;
