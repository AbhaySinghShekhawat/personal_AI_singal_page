import React, { useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

const features = [
  {
    title: "Fast Performance",
    description: "Optimized code and clean architecture for speed and efficiency.",
  },
  {
    title: "Modern UI/UX",
    description: "Beautiful, minimal, and user-friendly designs for better engagement.",
  },
  {
    title: "Secure Backend",
    description: "Robust authentication and encrypted data handling.",
  },
  {
    title: "Scalable Systems",
    description: "Architected to grow with your business needs.",
  },
];

const Features = () => {
  useEffect(() => {
    const tiltCards = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(tiltCards, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
    });
  }, []);

  return (
    <section
      id="features"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-[#05050a]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-70 animate-aurora"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 mb-16"
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
          Features
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
          Everything you need to build powerful, scalable, and modern web apps.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="tilt-card relative p-6 rounded-2xl bg-black/40 border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.4)] hover:shadow-[0_0_80px_rgba(236,72,153,0.7)] transition-all duration-500 backdrop-blur-xl"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-5xl mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
