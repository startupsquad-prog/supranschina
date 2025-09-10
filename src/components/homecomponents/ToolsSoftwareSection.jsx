
import React, { useState } from "react";

// Sample images — replace with your actual image imports
import wechat from "../../assets/images/wechat.png";
import gpay from "../../assets/images/google.png";
import whatsapp from "../../assets/images/Whatapp.png";
import translator from "../../assets/images/translate.png";

import visa from "../../assets/images/PassportHelp.png";
import flight from "../../assets/images/FlightBooking.png";
import passport from "../../assets/images/PassportHelp.png";
import hotel from "../../assets/images/FlightBooking.png";

import alibaba from "../../assets/images/Alibaba.png";
import indiamart from "../../assets/images/IndiaMART.png";
import globalsources from "../../assets/images/GlobalSources.png";
import madeinchina from "../../assets/images/MadeInchina.png";

// Example tool data for each tab
const toolData = {
  "Mobile Apps": [
    { img: wechat, title: "WeChat", desc: "Essential for communication in China" },
    { img: gpay, title: "Google Pay", desc: "Tool for transaction and payment" },
    { img: whatsapp, title: "WhatsApp", desc: "Enhance communication" },
    { img: translator, title: "Google Translator", desc: "Worldwide used translation tool" },
  ],
  "China Visa & Travel": [
    { img: visa, title: "Visa Services", desc: "Assistance for visa processing" },
    { img: flight, title: "Flight Booking", desc: "Book affordable flights to China" },
    { img: passport, title: "Passport Help", desc: "Renewal & documentation services" },
    { img: hotel, title: "Hotel Booking", desc: "Accommodation across major cities" },
  ],
  "B2B Marketplaces": [
    { img: alibaba, title: "Alibaba", desc: "Largest B2B wholesale platform" },
    { img: indiamart, title: "IndiaMART", desc: "Indian B2B supplier directory" },
    { img: globalsources, title: "GlobalSources", desc: "Verified manufacturers" },
    { img: madeinchina, title: "MadeInChina", desc: "China-based global suppliers" },
  ],

};

export default function ToolsSoftwareSection() {
  const [activeTab, setActiveTab] = useState("Mobile Apps");

  return (
    <div className="py-10 px-4 text-center">
      {/* Heading */}
      <div className="inline-block border-2 border-red-400 px-6 py-2 rounded-full mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Tools & Software</h2>
      </div>
      <p className="text-gray-600 mb-6 text-sm md:text-base">
        Essential Tools for Global Entrepreneurs
      </p>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.keys(toolData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-red-100 text-red-500 hover:bg-red-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {toolData[activeTab].map((tool, index) => (
          <div
            key={index}
            className="border-2 border-red-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <img src={tool.img} alt={tool.title} className="h-12 mx-auto mb-3" />
            <h3 className="font-semibold">{tool.title}</h3>
            <p className="text-sm text-gray-600">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
