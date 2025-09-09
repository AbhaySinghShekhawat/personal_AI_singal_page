import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="faq" className="relative w-full py-24 overflow-hidden bg-[#05050a]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-80 animate-aurora"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative text-center max-w-3xl mx-auto z-10 mb-16"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Get quick answers to the most common questions about me and my work.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-3xl mx-auto space-y-6 px-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:shadow-[0_0_45px_rgba(236,72,153,0.35)] transition-all duration-500 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 transition group relative"
            >
              <span className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                {faq.question}
              </span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`text-xl ${openIndex === index ? "text-pink-400" : "text-gray-400"}`}
              >
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="px-6 pb-5 text-gray-300 text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
