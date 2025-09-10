
import { useRef, useEffect } from "react";
import LandingSection from "../components/aboutcomponents/LandingSection";
import WhatWeDo from "../components/aboutcomponents/WhatWeDo";
import BusinessCTA from "../components/aboutcomponents/BusinessCTA";
import MissionSection from "../components/aboutcomponents/MissionSection";
// import MeetTheMinds from "../components/aboutcomponents/MeetTheMinds";
import BestSection from "../components/aboutcomponents/BestSection";
import MilestoneSection from "../components/aboutcomponents/MilestoneSection";

export const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const shakeElements = () => {
      if (!aboutRef.current) return;

      const elements = aboutRef.current.querySelectorAll("button, a");
      elements.forEach((el) => {
        el.classList.add("shake");
        setTimeout(() => el.classList.remove("shake"), 500);
      });
    };

    const interval = setInterval(shakeElements, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={aboutRef}>
      <LandingSection />
      <WhatWeDo />
      <BusinessCTA />
      <MissionSection />
      <MilestoneSection />
      {/* <MeetTheMinds /> */}
      <BestSection />

      {/* Shake animation CSS */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};
