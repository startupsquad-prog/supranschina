
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import rectangle1 from "../../assets/images/c1.png";
import rectangle2 from "../../assets/images/c2.png";
import rectangle3 from "../../assets/images/c3.png";

const testimonials = [
  {
    id: 1,
    name: "Vicky Sharma",
    title: "Founder @techvita",
    quote:
      "I thought it was very smooth, it was done within a day and all I hit was like 5 buttons.",
    image: rectangle1,
    thumbnail: rectangle1,
  },
  {
    id: 2,
    name: "Ayesha Khan",
    title: "Co-Founder @brightlabs",
    quote:
      "We launched in record time. Everything felt intuitive and incredibly well thought out.",
    image: rectangle2,
    thumbnail: rectangle2,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    title: "CEO @codecraft",
    quote:
      "A seamless onboarding experience. It gave our team the freedom to move fast.",
    image: rectangle3,
    thumbnail: rectangle3,
  },
];

const TestimonialCard = () => {
  // 👇 First card opened by default
  const [selectedPerson, setSelectedPerson] = useState(testimonials[0]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <>
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .floating-card {
          animation: floatUpDown 4s ease-in-out infinite;
        }
        .thumbnail-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .thumbnail-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(229, 62, 62, 0.6);
          border-color: #e53e3e;
          z-index: 10;
        }
      `}</style>

      <div className="min-h-screen flex flex-col items-center justify-start bg-white p-6 font-sans">
        <h1
          className="text-5xl font-semibold text-center mb-10"
          data-aos="fade-up"
        >
          Built for <span className="text-red-500">Founders</span> and{" "}
          <span className="text-red-500">Dreamers</span>
        </h1>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Thumbnails */}
          <div className="flex flex-row gap-4">
            {testimonials.map((person) => (
              <img
                key={person.id}
                src={person.thumbnail}
                alt={person.name}
                onClick={() => handleImageClick(person)}
                className={`h-24 w-16 object-cover rounded-xl border border-dashed thumbnail-hover 
                  ${
                    selectedPerson?.id === person.id
                      ? "border-red-600 scale-110 shadow-lg"
                      : "border-red-400"
                  }`}
              />
            ))}
          </div>

          {/* Testimonial Card */}
          {selectedPerson && (
            <div
              className="w-full max-w-4xl p-6 border border-dashed border-blue-300 rounded-md bg-red-50 text-black floating-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Image */}
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-full md:w-80 h-auto object-cover rounded-md border border-dashed border-red-400"
                />

                {/* Text */}
                <div className="text-left flex-1">
                  <div className="text-red-500 text-6xl md:text-8xl font-bold leading-none">
                    “
                  </div>
                  <p className="text-xl md:text-3xl font-semibold leading-relaxed mb-4">
                    {selectedPerson.quote}
                  </p>
                  <p className="text-lg md:text-2xl font-semibold text-gray-700 md:pl-80">
                    {selectedPerson.name}
                  </p>
                  <p className="text-lg md:text-2xl text-red-500 underline md:pl-70">
                    {selectedPerson.title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
