
import Cantonsuprans from "../../assets/images/supcanton.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutCantonFair() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="px- sm:px- py-12">
      {/* About Section */}
      <div data-aos="fade-up " className="bg-red-600 ">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white ml-15 pt-5">
          About
        </h2>
        <p className="mt-5 text-xl sm:text-xl text-white leading-relaxed ml-14 pb-6">
          The <span className="text-white font-semibold">Canton Fair 2025</span>{" "}
          in Guangzhou, China, is the world’s largest trade exhibition, bringing
          together thousands of verified manufacturers, global buyers, and
          industry leaders under one roof. This year, Suprans proudly announces
          its 1st International Business Delegation, offering an exclusive
          opportunity for Indian entrepreneurs, importers, exporters, and
          business owners to explore China’s manufacturing powerhouses like
          never before.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="mt-20">
        <h3
          className="text-3xl sm:text-5xl font-semibold text-center"
          data-aos="fade-up"
        >
          Highlights of the{" "}
          <span className="text-red-600 font-bold">CANTON</span> Fair
        </h3>

        <div className="flex flex-col sm:flex-row justify-between mt-16 gap-8">
          {/* List */}
          <ul
            className="space-y-4 text-gray-800 text-base sm:text-3xl ml-10"
            data-aos="fade-right"
          >
            {[
              "Live negotiation and sourcing",
              "Factory visits & supplier verification",
              "Pre-fair training by Mr. Suprans",
              "Networking dinners with industry leaders",
              "Direct manufacturer access",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 cursor-pointer transition hover:text-red-600 hover:translate-x-2"
              >
                <span className="text-red-600 font-bold">#</span> {item}
              </li>
            ))}
          </ul>

          {/* Circle Image */}
          <div
            className="w-48 h-48 sm:w-72 sm:h-72 rounded-full border-2 border-red-600 overflow-hidden shadow-md 
            self-center sm:self-start mr-10"
            data-aos="fade-left"
          >
            <img
              src={Cantonsuprans}
              alt="Canton Fair"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
