
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../../assets/images/icon1.jpeg";
import icon2 from "../../assets/images/icon2.jpeg";
import icon3 from "../../assets/images/icon3.jpeg";
import icon4 from "../../assets/images/icon4.jpeg";
import icon5 from "../../assets/images/icon5.jpeg";
import icon6 from "../../assets/images/icon6.jpeg";
import main from "../../assets/images/main.jpeg";

export default function FloatingIcons() {
  const icons = [
    { src: icon1, angle: 270 },
    { src: icon2, angle: 330 },
    { src: icon3, angle: 30 },
    { src: icon4, angle: 90 },
    { src: icon5, angle: 150 },
    { src: icon6, angle: 210 },
  ];

  const totalImages = icons.length + 1;
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    if (loadedCount === totalImages) {
      AOS.refresh();
    }
  }, [loadedCount, totalImages]);

  const handleImageLoad = () => {
    setLoadedCount((count) => count + 1);
  };

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotateY(0deg); }
            50% { transform: translateY(-15px) rotateY(10deg); }
            100% { transform: translateY(0px) rotateY(0deg); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
            transform-style: preserve-3d;
          }
        `}
      </style>

      <div className="flex items-center justify-center p-4" data-aos="zoom-in">
        <div
          className="relative w-[300px] h-[250px] sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[400px]"
        >
          {/* Center Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={main}
              alt="center"
              onLoad={handleImageLoad}
              className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Floating Icons */}
          {icons.map((icon, index) => {
            const radiusX = window.innerWidth < 640 ? 150 : window.innerWidth < 768 ? 300 : 450;
            const radiusY = window.innerWidth < 640 ? 90 : window.innerWidth < 768 ? 150 : 200;
            const rad = (icon.angle * Math.PI) / 180;
            const x = radiusX * Math.cos(rad);
            const y = radiusY * Math.sin(rad);

            const iconSize =
              window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 100 : 150;

            return (
              <img
                key={index}
                src={icon.src}
                alt={`icon${index + 1}`}
                onLoad={handleImageLoad}
                className="rounded-full absolute animate-float"
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
                  left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
