
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const BestSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 px-4 text-center bg-white">
      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-semibold mb-10"
        data-aos="fade-up"
      >
        <span className="text-red-600">How</span> we are the{" "}
        <span className="bg-red-600 text-white px-2 py-1 rounded-md">BEST</span>
      </h2>

      {/* Bullet Points */}
      <div
        className="max-w-3xl mx-auto text-left space-y-4 md:pl-8 text-gray-800 text-sm md:text-2xl"
        data-aos="fade-up"
      >
        {[
          "We deliver end-to-end solutions, from ideation to execution",
          "Our work is always tailored to user experience and engagement",
          "We bring expertise across diverse industries and formats",
          "We have a proven track record of impactful results",
          "We combine functionality with aesthetics in everything we do",
        ].map((text, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
          >
            <FaCheckCircle className="text-green-500 text-lg mt-1 flex-shrink-0 group-hover:scale-110 transition" />
            <span className="leading-snug">{text}</span>
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <p
        className="mt-10 max-w-6xl mx-auto text-gray-800 text-sm md:text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-red-600 font-semibold">Suprans</span> isn’t just a service — it’s the driving force behind bold ideas,
        empowering creators, brands, and businesses to rise, stand out, and
        lead with impact.
      </p>

      {/* CTA Button Centered */}
      <div
        className="mt-10 flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <Link
          to="/contactform1"
          className="text-red-600 border border-red-600 px-5 py-2 rounded-full font-medium 
                   hover:bg-red-600 hover:text-white transition flex items-center gap-2 
                   hover:scale-105 hover:shadow-lg"
        >
          Develop my Brand <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BestSection;
