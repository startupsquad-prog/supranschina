
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const comboPlans = [
  {
    phase: "Phase 1",
    date: "Oct 15–19, 2025",
    category: "Consumer Electronics",
    originalPrice: "₹99,000",
    discountedPrice: "₹79,990",
    savings: "₹20,000",
    isPopular: false,
  },
  {
    phase: "Phase 2",
    date: "Oct 23–27, 2025",
    category: "Home & Garden",
    originalPrice: "₹99,000",
    discountedPrice: "₹79,990",
    savings: "₹20,000",
    isPopular: true,
  },
  {
    phase: "Phase 3",
    date: "Oct 31–04 Nov, 2025",
    category: "Apparel & Textiles",
    originalPrice: "₹99,000",
    discountedPrice: "₹79,990",
    savings: "₹20,000",
    isPopular: false,
  },
];

const businessPlans = [
  {
    title: "Business Combo",
    description: "Global Sources HongKong + Canton China",
    originalPrice: "₹1,25,000",
    discountedPrice: "₹89,990",
    savings: "₹35,010",
    benefits: [
      "Hong Kong to Guangzhou",
      "2 Major Fairs",
      "Factory Visits",
      "International Buyers",
    ],
    isPopular: true,
  },
  {
    title: "Combo + Hotel",
    description: "Complete package with premium accommodation",
    originalPrice: "₹1,85,000",
    discountedPrice: "₹1,49,990",
    savings: "₹46,000",
    benefits: ["All Combo Benefits", "4-Star Hotels", "Indian Meals"],
    isPopular: false,
  },
];

const PlanCards = ({ onButtonClick }) => {
  const [activePlan, setActivePlan] = useState("combo");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const plansToShow = activePlan === "combo" ? comboPlans : businessPlans;

  const scrollToSalesTeam = () => {
    document.getElementById("sales-team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="plans"
      className="bg-gradient-to-b from-black via-white to-black py-16 px-6 mb-15"
    >
      <div className="max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActivePlan("combo")}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
              activePlan === "combo"
                ? "bg-red-600 text-white"
                : "bg-white border border-black text-black hover:bg-red-50"
            }`}
          >
            Canton Only
          </button>
          <button
            onClick={() => setActivePlan("business")}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
              activePlan === "business"
                ? "bg-black text-white"
                : "bg-white border border-black text-black hover:bg-gray-100"
            }`}
          >
            Suprans Business Plan
          </button>
        </div>

        {/* Cards */}
        <div
          key={activePlan} // 🔑 Dynamic key forces re-mount for animation
          className={`grid grid-cols-1 md:grid-cols-${activePlan === "combo" ? "3" : "2"} gap-10`}
          data-aos="fade-up"
        >
          {plansToShow.map((plan, idx) => {
            if (activePlan === "combo") {
              const { phase, date, category, originalPrice, discountedPrice, savings, isPopular } = plan;
              return (
                <div
                  key={idx}
                  className={`relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ${
                    isPopular ? "border-red-600 ring-2 ring-red-400" : "border-gray-200"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-black text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      🔥 Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extrabold text-black">{phase}</h3>
                    <p className="text-gray-600 mt-1">{date}</p>
                    <p className="text-red-600 font-semibold mt-1">{category}</p>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-gray-400 line-through">{originalPrice}</p>
                    <p className="text-4xl font-extrabold text-red-600 drop-shadow-md">{discountedPrice}</p>
                    <p className="text-green-600 font-semibold">Save {savings}</p>
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={onButtonClick}
                      className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-red-600 to-black hover:scale-105 text-white transition-all mb-4"
                    >
                      Book Now
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={onButtonClick}
                        className="w-40 border border-black rounded-full py-2 text-black font-semibold hover:bg-red-50 transition"
                      >
                        Enquire
                      </button>
                      <button
                        onClick={scrollToSalesTeam}
                        className="flex-1 border border-black rounded-full py-2 text-black font-semibold hover:bg-red-50 transition"
                      >
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              const { title, description, originalPrice, discountedPrice, savings, benefits, isPopular } = plan;
              return (
                <div
                  key={idx}
                  className={`relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 ${
                    isPopular ? "border-red-600 ring-2 ring-red-400" : "border-gray-200"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      ⭐ Premium Pick
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extrabold text-black">{title}</h3>
                    <p className="text-gray-600 mt-1">{description}</p>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-gray-400 line-through">{originalPrice}</p>
                    <p className="text-4xl font-extrabold text-red-600 drop-shadow-md">{discountedPrice}</p>
                    <p className="text-green-600 font-semibold">Save {savings}</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-left">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4">
                    <button
                      onClick={onButtonClick}
                      className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-black to-red-600 hover:scale-105 text-white transition-all"
                    >
                      Book Now
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={onButtonClick}
                        className="w-70 border border-black rounded-full py-2 text-black font-semibold hover:bg-red-50 transition"
                      >
                        Enquire
                      </button>
                      <button
                        onClick={scrollToSalesTeam}
                        className="flex-1 border border-black rounded-full py-2 text-black font-semibold hover:bg-red-50 transition"
                      >
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Footer */}
        <p className="text-center mt-10 text-gray-600 text-sm">
          *Prices exclude visa fees and international flights. GST applicable.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-red-600 font-semibold text-sm">
          <a href="#refund" className="hover:underline">
            Refund Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanCards;
