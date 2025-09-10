


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["CANTON_FAIR", "Global_Source"];

const faqs = {
  CANTON_FAIR : [
  {
    question:"Phase 1 (15–19 October 2025)",
    answer: [
      " Household Electrical Appliances, Consumer Electronics & Information Products, Electronic & Electrical Products, Lighting Equipment, New Energy Resources, New Materials & Chemical Products, Hardware & Tools, Machining Machinery & Equipment, Power Machinery & Electric Power, General Machinery & Mechanical Parts, Industrial Automation & Intelligent Manufacturing, Construction Machinery, Agricultural Machinery, New Energy Vehicles & Smart Mobility, Motorcycles, Bicycles, Vehicle Spare Parts & Vehicles.",
     
      "Phase 3 (31 October – 4 November 2025): Toys, Baby, Maternity & Kids’ Products, Fashion: Clothing, Sportswear, Underwear, Leather & Accessories, Home Textiles, Carpets & Tapestries, Textile Raw Materials & Fabrics, Shoes, Cases & Bags, Office Supplies, Health & Recreation: Medicines, Medical Devices, Personal Care, Pet Products, Food, Sports, Travel & Recreation Products, Traditional Chinese Specialties."
    ],
  },
    {
      question: "Phase 2 (23–27 October 2025)",
      answer:[
        " Building & Decorative Materials, Sanitary & Bathroom Equipment, Furniture, Kitchenware & Tableware, General Ceramics & Household Items, Clocks, Watches & Optical Instruments, Gifts & Premiums, Festival Products, Home Decorations, Art Ceramics & Glass Artware, Gardening Products, Weaving, Rattan & Iron Products, Stone/Iron Decorations & Outdoor Spa Equipment."
      ],
        
    },
    {
      question: "Phase 3 (31 October – 4 November 2025",
      answer: [
        "Toys, Baby, Maternity & Kids’ Products, Fashion: Clothing, Sportswear, Underwear, Leather & Accessories, Home Textiles, Carpets & Tapestries, Textile Raw Materials & Fabrics, Shoes, Cases & Bags, Office Supplies, Health & Recreation: Medicines, Medical Devices, Personal Care, Pet Products, Food, Sports, Travel & Recreation Products, Traditional Chinese Specialties."
      ],
    },

  ],
  Global_Source: [
    {
    question: "SUPRANS EXCLUSIVE TRIP DETAILS",
    answer: [
      "11 Oct (Sat), Hong Kong: Arrival at Hong Kong Airport → Direct to Global Sources Exhibition (Asia World Expo) → Dinner → Overnight in Hong Kong",
      "12 Oct (Sun), Hong Kong: Breakfast at Hotel → Full-day Global Sources Exhibition → Dinner → Overnight in Hong Kong",
      "13 Oct (Mon), Hong Kong → Guangzhou: Breakfast at Hotel + Half-day Global Sources Exhibition → Transfer to Guangzhou → Dinner → Overnight in Guangzhou",
      "14 Oct (Tue), Guangzhou: Breakfast at Hotel + Guangzhou Market Visits (Yide Road / Baima, Electronics) → Evening Networking + Factory Meet → Dinner → Overnight in Guangzhou",
      "15 Oct (Wed), Guangzhou: Breakfast at Hotel + Attend Canton Fair Phase 1 → Return to Hotel → Dinner → Overnight in Guangzhou",
      "16 Oct (Thu), Guangzhou: Breakfast at Hotel + Attend Canton Fair Phase 1 → Return to Hotel → Dinner → Overnight in Guangzhou",
      "17 Oct (Fri), Guangzhou → Hong Kong: Breakfast at Hotel + Attend Canton Fair Phase 1 → Evening transfer to Hong Kong → Dinner → Overnight in Hong Kong",
      "18 Oct (Sat), Hong Kong: Breakfast at Hotel + Attend Global Sources Exhibition (other halls/products) → Dinner → Overnight in Hong Kong",
      "19 Oct (Sun), Hong Kong → India (Checkout at 12:00 Noon): Breakfast at Hotel → Hotel Checkout → Transfer to Airport → Flight to India",
    ]
  },

 {
    question: "Phase 1",
    answer: [
      "Consumer electroncs, e-Sports & gamng, electronc components, audo/vdeo, auto electroncs (Global Sources)"
    ]
  },
 {
    question: "Phase 2",
    answer: [
      "Moble devces (smartphones, AR/VR/tablets), wearable tech (smartwatches, earbuds, smart glasses), moble accessores, new energyproducts (Canton Far, Global Sources)"
    ]
  },
],
 
};

export default function ToggleFAQ() {
  const [activeCategory, setActiveCategory] = useState("Basics");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center">
      {/* Title with fade-down */}
      <h2 className="text-3xl font-bold mb-2" data-aos="fade-down">
        Frequently Asked <span className="text-red-600">Questions</span>
      </h2>

      {/* Description with fade-down and slight delay */}
      <p
        className="text-sm text-gray-600 mb-8 max-w-xl mx-auto"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        Got a question? Chances are, it’s been asked before! Explore our
        collection of frequently asked questions.
      </p>

      {/* Tabs with fade-up */}
      <div
        className="flex justify-center flex-wrap gap-4 mb-10"
        data-aos="fade-up"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null); // reset open accordion on tab change
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="text-left space-y-4 max-w-3xl mx-auto">
        {faqs[activeCategory] && faqs[activeCategory].length > 0 ? (
          faqs[activeCategory].map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer border-b pb-3 rounded-md transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ transitionProperty: "background-color" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(239, 68, 68, 0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.question}</p>
                <span className="text-xl select-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-sm text-gray-600">{item.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p
            className="text-sm text-gray-500 text-center"
            data-aos="fade-up"
          >
            No FAQs available in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
