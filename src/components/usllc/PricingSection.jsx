
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PricingSection({onButtonClick}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$199",
      features: [
        "Brand Development",
        "Dropshipping Service",
        "Products Supply",
        "Website Building",
        "AI Tools",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$299",
      features: [
        "Brand Development",
        "Dropshipping Service",
        "Products Supply",
        "Website Building",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$399",
      features: [
        "Brand Development",
        "Dropshipping Service",
        "Products Supply",
        "Website Building",
        "AI Tools",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .floating {
            animation: floatUpDown 5s ease-in-out infinite;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .floating:hover {
            transform: translateY(-15px) scale(1.07);
            box-shadow: 0 20px 30px rgba(0,0,0,0.15);
            z-index: 10;
          }
        `}
      </style>

      <div className="py-12 px-4 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          <span className="text-red-600">Pricing</span> & Packages
        </h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg pb-6">
          Select your perfect plan with transparent pricing and no unexpected fees
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
          {plans.map((plan, i) => {
            const offset =
              i === 1
                ? "md:-mt-8 md:z-10 md:scale-105"
                : "mt-0";

            return (
              <div
                key={i}
                className={`relative border-2 border-red-500 rounded-3xl w-full max-w-sm mx-auto p-6 sm:p-8 pt-10 flex flex-col items-center shadow-md bg-white ${offset} floating`}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                {plan.popular && (
                  <div className="absolute -top-5 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">{plan.price}</p>

               <button
  onClick={onButtonClick} // open modal from parent
  className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md 
             hover:bg-red-600 transition mb-6"
>
  Get Started ↗
</button>

                <ul className="flex flex-col gap-3 text-left">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-800 text-sm"
                    >
                      <FaCheckCircle className="text-green-500" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative circles */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-red-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
