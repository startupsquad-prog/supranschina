
import React, { useEffect, useState } from "react";
import iPhoneMock from "../../assets/images/BlankiPhone.png";

const items = [
  { title: "Automation", icon: "⚙️" },
  { title: "Social Media Tools", icon: "📱" },
  { title: "Brand Copywriting", icon: "🏷️" },
  { title: "Logo Designing", icon: "🎨" },
  { title: "Website Building", icon: "💻" },
  { title: "E-commerce", icon: "🛒" },
  { title: "AI Tools", icon: "🤖" },
  { title: "Content Creation", icon: "📝" },
  { title: "Team Training", icon: "👨‍🏫" },
  { title: "Digital Strategy", icon: "📊" },
  { title: "Analytics", icon: "📈" },
];

const IphoneSlider = () => {
  const [centerIndex, setCenterIndex] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPositionStyles = (index) => {
    const distance = (index - centerIndex + items.length) % items.length;
    const actualDistance =
      distance > items.length / 2 ? distance - items.length : distance;

    const baseTranslateX = 90;
    const scale = 1 - Math.abs(actualDistance) * 0.07;
    const translateX = actualDistance * baseTranslateX;
    const translateY = Math.abs(actualDistance) * 10;
    const zIndex = 30 - Math.abs(actualDistance) * 2;
    const width = `${8 - Math.abs(actualDistance) * 0.5}rem`;

    if (Math.abs(actualDistance) > 5) {
      return {
        opacity: 0,
        pointerEvents: "none",
        transform: "scale(0)",
      };
    }

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex,
      width,
      transition: "all 0.7s ease-in-out",
    };
  };

  return (
    <div
      className="w-screen h-screen bg-white overflow-hidden relative flex items-end justify-center"
      style={{ padding: 0, margin: 0 }}
    >
      <div
        className="relative w-full max-w-[100px] h-[00px] md:h-[300px] flex items-end justify-center mx-auto"
        style={{ padding: 0, margin: 0 }}
      >
        {items.map((item, index) => {
          const styles = getPositionStyles(index);

          return (
            <div
              key={index}
              className="absolute cursor-pointer"
              style={styles}
              onClick={() => setCenterIndex(index)}
            >
              <img src={iPhoneMock} alt="iPhone" className="w-full" />
              <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 text-center px-2">
                <div className="text-2xl md:text-4xl mb-2">{item.icon}</div>
                <div className="text-[10px] md:text-sm font-medium text-red-600 leading-tight">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IphoneSlider;
