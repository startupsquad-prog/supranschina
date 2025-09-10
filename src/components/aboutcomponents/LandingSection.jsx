import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const LandingSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="text-center py-12 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-xl md:text-4xl text-gray-800">
        Where <span className="text-red-600 font-semibold">vision</span> meets{" "}
        <span className="text-red-600 font-semibold">execution</span>
      </h2>

      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-bold mt-4 text-black">
        Your Brand’s Foundation starts{" "}
        <span className="text-red-600">@SUPRANS.</span>
      </h1>

      {/* Subheading */}
      <p className="text-2xl text-gray-600 mt-2">All in one platform supported by AI</p>

      {/* CTA Button */}
      <div className="mt-6">
        <Link
  to="/contactform1"
  className="text-red-600 border border-red-600 px-6 py-2 rounded-full font-medium 
             hover:bg-red-600 hover:text-white transition flex items-center justify-center 
             gap-2 mx-auto hover:scale-105 hover:shadow-lg duration-300 w-56"
>
  Get Started Now <span className="text-xl">→</span>
</Link>
      </div>

      {/* Vision Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-8">
          Our <span className="text-red-600">VISION</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((num, index) => (
            <div
              key={num}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative border-2 border-red-600 rounded-xl py-16 px-6 min-h-[150px] flex items-center justify-center transform transition duration-300 hover:scale-105 hover:bg-red-50 group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm group-hover:scale-110 transition">
                {num}
              </div>
              <p className="text-gray-500 group-hover:text-red-600 transition">
                Content {num} goes here
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
