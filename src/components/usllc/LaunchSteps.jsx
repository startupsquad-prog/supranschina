
import React, { useEffect } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LaunchSteps() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const steps = [
    {
      number: "Step 1",
      time: "15 mins",
      cardTitle:
        "To kick off the process, you'll need to provide some basic information about your future business.",
      heading: "Submit Your Information Through Our User-Friendly Dashboard",
      items: [
        {
          label: "Company Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
        {
          label: "Members Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
      ],
    },
    {
      number: "Step 2",
      time: "1 week",
      cardTitle:
        "To kick off the process, you'll need to provide some basic information about your future business.",
      heading: "Start Your U.S. Company in Any of The 50 States",
      items: [
        {
          label: "Company Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
        {
          label: "Members Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
      ],
    },
    {
      number: "Step 3",
      time: "4–6 week",
      cardTitle:
        "To kick off the process, you'll need to provide some basic information about your future business.",
      heading: "Secure Your Business Documentation",
      items: [
        {
          label: "Company Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
        {
          label: "Members Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
      ],
    },
    {
      number: "Step 4",
      time: "3–4 Business Days",
      cardTitle:
        "To kick off the process, you'll need to provide some basic information about your future business.",
      heading: "Set Up Your U.S. Bank Account",
      items: [
        {
          label: "Company Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
        {
          label: "Members Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
      ],
    },
    {
      number: "Step 5",
      time: null,
      cardTitle:
        "To kick off the process, you'll need to provide some basic information about your future business.",
      heading: "Run & Grow Your Business",
      items: [
        {
          label: "Company Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
        {
          label: "Members Information",
          desc: "Preferred Name, Entity Type, State, and a Few Other Basics",
        },
      ],
      button: "Start Your Business",
    },
  ];

  const StepCard = ({ time, items, button, cardTitle }) => (
    <div className="bg-red-100 rounded-lg p-4 sm:w-72 w-full shadow-md floating">
      {time && (
        <div className="flex items-center gap-2 mb-2 bg-black text-white px-3 py-1 rounded-lg w-fit">
          <FaClock className="text-white" />
          <span className="font-semibold">{time}</span>
        </div>
      )}

      <p className="text-sm text-black mb-2">{cardTitle}</p>

      <div className="text-sm text-black flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>{item.label}</span>
            </div>
            <p className="text-xs text-gray-600 ml-6">{item.desc}</p>
          </div>
        ))}
      </div>

      {button && (
        <button className="bg-red-600 text-white font-semibold rounded-lg px-4 py-2 mt-4 w-full">
          {button}
        </button>
      )}
    </div>
  );

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto text-center relative">
      <div className="absolute top-28 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-red-500 z-0 hidden md:block" />

      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center justify-between mb-14 relative z-10`}
          data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
          data-aos-delay={index * 150}
        >
          {/* Left side Card */}
          <div className="md:w-1/2 md:px-6 w-full">
            <div className="w-fit mx-auto">
              <StepCard
                time={step.time}
                cardTitle={step.cardTitle}
                items={step.items}
                button={step.button}
              />
            </div>
          </div>

          {/* Middle Circle */}
          <div className="bg-white border-[4px] md:border-[6px] border-red-500 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10 my-6 md:my-0">
            <div className="bg-red-500 text-white text-xs md:text-sm font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              ✔
            </div>
          </div>

          {/* Right side Heading */}
          <div
            className={`md:w-1/2 md:px-6 mt-4 md:mt-0 text-center md:text-${
              index % 2 !== 0 ? "right" : "left"
            }`}
          >
            <div className="bg-red-600 text-white px-4 py-1 rounded-md inline-block mb-2 text-sm font-semibold">
              {step.number}
            </div>
            <h4 className="text-xl md:text-3xl font-semibold">{step.heading}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
