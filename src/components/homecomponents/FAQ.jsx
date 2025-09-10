
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["Basics", "Services", "Tools & Software", "Other"];

const faqs = {
  Basics: [
    {
      question: "What makes Suprans different from everyone else?",
      answer:
        "Suprans focuses on merging creativity with strategic execution to deliver lasting impact.",
    },
    {
      question: "Do I need experience to use Suprans?",
      answer:
        "Not at all. Suprans is designed for both beginners and professionals alike.",
    },
    {
      question: "Is Suprans just digital, or do you also support physical products?",
      answer: "We support both digital and physical product strategies.",
    },
    {
      question: "How do I know if Suprans is right for me?",
      answer:
        "If you’re a creator, entrepreneur, or business looking to grow — Suprans is for you.",
    },
    {
      question: "How does Suprans actually help me grow?",
      answer:
        "We offer tools, mentorship, and services tailored to your goals to accelerate your progress.",
    },
  ],
  Services: [],
  "Tools & Software": [],
  Other: [],
};

export default function FAQ() {
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
