
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  { number: "1", title: "Business Name Check", desc: "Verify Availability across all US states" },
  { number: "2", title: "State Selection", desc: "Choose Optimal state for your business" },
  { number: "3", title: "Articles Filing", desc: "Submit formation documents to authorities" },
  { number: "4", title: "EIN Application", desc: "Federal tax ID registration with IRS" },
  { number: "5", title: "BOI Compliance", desc: "Beneficial ownership information filing" },
  { number: "6", title: "Banking Setup", desc: "Mercury/Chase business account opening" },
  { number: "7", title: "Compliance Kit", desc: "Operating agreement & ongoing compliance" },
];

export default function LLCFormationSteps() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <>
      <style>{`
        .steps-scroll::-webkit-scrollbar { display: none; }
        .steps-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes floating {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .floating-circle {
          animation: floating 3s ease-in-out infinite;
        }
        .connector {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 0;
        }
      `}</style>

      <section className="py-6 bg-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-1">
          USA LLC Formation Process in just <span className="text-red-600">7 Steps</span>
        </h2>

        <div className="max-w-full py-5 px-4 bg-white relative overflow-hidden">
          <div
            className="flex gap-8 overflow-x-auto scroll-smooth steps-scroll relative"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center min-w-[160px] p-4 rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white z-10"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="bg-red-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center floating-circle z-10">
                  {step.number}
                </div>

                {idx < steps.length - 1 && (
                  <svg
                    className="connector"
                    style={{ left: "100%", width: "80px", height: "60px" }}
                    viewBox="0 0 80 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="6"
                        markerHeight="6"
                        refX="5"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L6,3 L0,6 Z" fill="#e53e3e" />
                      </marker>
                    </defs>
                    <path
                      d="M0,30 C25,0 55,60 80,30"
                      stroke="#e53e3e"
                      strokeWidth="4"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                )}

                <h3 className="mt-3 font-semibold text-center text-sm leading-snug">{step.title}</h3>
                <p className="mt-1 text-xs text-gray-600 text-center leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
