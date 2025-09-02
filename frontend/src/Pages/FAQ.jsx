import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What platforms is Comet available on?",
    answer: "Comet is available on Windows, macOS, Linux, iOS, and Android."
  },
  {
    question: "How do I install Comet?",
    answer: "You can install Comet by downloading it from the official website or app store."
  },
  {
    question: "What search engine does Comet use?",
    answer: "Comet uses its own privacy-focused search engine with advanced features."
  },
  {
    question: "Is Comet free?",
    answer: "Yes, Comet is free to use with optional premium upgrades."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
      <h2 className="text-4xl font-serif text-gray-900 mb-12">FAQ</h2>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 bg-white hover:bg-gray-50 transition"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-xl text-gray-600">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
