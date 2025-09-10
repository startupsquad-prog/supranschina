
import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { value: 8956, suffix: "+", label: "Happy Customers" },
  { value: 3189, suffix: "+", label: "Successful Businesses" },
  { value: 9023, suffix: "+", label: "Products" },
];

export default function BusinessStats() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-white rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-red-600">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                suffix={item.suffix}
                enableScrollSpy
                scrollSpyOnce
                separator=","
              />
            </h2>
            <p className="text-base sm:text-xl font-medium text-gray-800 mt-1 sm:mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
