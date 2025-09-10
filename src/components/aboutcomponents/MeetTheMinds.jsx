
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import B1 from "../../assets/images/B1.png";
import B2 from "../../assets/images/B2.png";
import B3 from "../../assets/images/B3.JPG";

const MeetTheMinds = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Reusable team card component
  const TeamCard = ({ image, role, name, experience, others }) => (
    <div
      className="border-4 border-red-600 rounded-tl-sm rounded-[35px] px-6 py-6 w-[280px] md:w-[300px] text-center hover:shadow-lg transition duration-300"
      data-aos="fade-up"
    >
      {/* Profile Image */}
      <div className="w-24 h-44 mx-auto rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      {/* Role */}
      <h3 className="text-xl font-semibold mb-1">{role}</h3>

      {/* Info */}
      <div className="text-sm text-gray-800 space-y-1">
        <p>
          Name: <span className="text-red-600 font-medium">{name}</span>
        </p>
        <p>
          Experience: <span className="text-red-600">{experience}</span>
        </p>
        <p>
          Others: <span className="text-red-600">{others}</span>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-4 gap-3 text-red-600 text-lg">
        {[FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaEnvelope].map(
          (Icon, i) => (
            <Icon
              key={i}
              className="hover:scale-125 hover:text-red-800 transition-transform duration-300 cursor-pointer"
            />
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4 text-center bg-white">
      {/* Title */}
      <h2
        className="text-3xl md:text-6xl font-semibold mb-10"
        data-aos="fade-down"
      >
        Meet The <span className="text-red-600 font-bold">MINDS</span>
      </h2>

      {/* Main Content */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto"
        data-aos="zoom-in"
      >
        {/* Left Card */}
        <TeamCard
          image={B3}
          role="Co-Founder"
          name="John Doe"
          experience="+7 years"
          others="Strategy Expert"
        />

        {/* Center Founder Card */}
        <TeamCard
          image={B2}
          role="Founder"
          name="Mr. Suprans"
          experience="+9 years"
          others="+9 years"
        />

        {/* Right Card */}
        <TeamCard
          image={B1}
          role="Creative Head"
          name="Jane Smith"
          experience="+5 years"
          others="Design & Branding"
        />
      </div>

      {/* Quote */}
      <div
        className="mt-12 max-w-6xl mx-auto text-sm md:text-2xl text-gray-800 px-4"
        data-aos="fade-up"
      >
        <p>
          Suprans was born from a single belief that anyone, anywhere, can turn
          bold ideas into real impact. We’re here to make that journey smoother,
          smarter, and stronger.”
        </p>
        <p className="mt-2 text-red-600 font-semibold">— Founder, Suprans</p>
      </div>
    </div>
  );
};

export default MeetTheMinds;
