import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Who am I?",
    answer:
      "I’m a passionate Full-Stack Developer specializing in building modern, responsive, and scalable web applications."
  },
  {
    question: "What technologies do I use?",
    answer:
      "My tech stack includes React.js, Next.js, Node.js, Express, MongoDB, TailwindCSS, and Git/GitHub."
  },
  {
    question: "Can I work on freelance projects?",
    answer:
      "Yes! I love collaborating on interesting freelance projects and bringing unique ideas to life."
  },
  {
    question: "How can you contact me?",
    answer:
      "You can reach me via email or through the contact form on my portfolio website."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-white to-gray-50">

         <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight  text-gray-900 mb-8">
           <span className="italic ">Frequently Asked Questions</span> 
        </h1>

      <div className="w-full max-w-3xl space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 shadow-md bg-white/70 backdrop-blur-md overflow-hidden transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 bg-white/50 hover:bg-gray-50 transition"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <span
                className={`text-xl ${
                  openIndex === index ? "text-pink-500" : "text-gray-600"
                }`}
              >
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
