
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  { icon: '📉', title: '27% Lower Cost', description: 'via group bookings' },
  { icon: '📅', title: '3 Fairs, 1 Trip', description: 'Global Sources + Canton' },
  { icon: '💬', title: 'Dedicated RM', description: 'WhatsApp support' },
  { icon: '⚡', title: 'Pre-Trip Sessions', description: 'Power training included' },
  { icon: '🏭', title: 'Factory Connects', description: 'Supplier verification' },
];

const WhyJoinUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 👇 smooth scroll function
  const scrollToSales = () => {
    const section = document.getElementById("sales-team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#fef2f2] py-20 px-6 text-center">
      {/* Section Title */}
      <h2 data-aos="fade-up" className="text-5xl font-extrabold text-red-600 mb-2">
        Why Join Us?
      </h2>
      <p data-aos="fade-up" data-aos-delay="100" className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Experience the difference with India's most pragmatic trade delegation
      </p>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-8xl mx-auto mb-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={150 * idx}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h4 className="font-semibold text-slate-800 text-lg mb-1">{feature.title}</h4>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div data-aos="fade-up" data-aos-delay="900" className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#included"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          See What's Included
        </a>
        <button
          onClick={scrollToSales}   // 👈 calls scroll function
          className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-medium transition"
        >
          📞 Call Now
        </button>
      </div>
    </section>
  );
};

export default WhyJoinUs;
