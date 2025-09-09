import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import img from "../assets/images/cimage.jpg";

export default function ImageBoxes() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden bg-[#05050a]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-80 animate-aurora"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center mb-16 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl pb-5 sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Explore My Work
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          A premium showcase of my latest projects and designs.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "left center",
              backgroundSize: "300% 100%",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.4)] border border-white/10"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center center",
              backgroundSize: "300% 100%",
            }}
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl font-bold mb-4"
            >
              My Portfolio
            </motion.h2>
            <motion.a
              href="#projects"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] transition-all duration-500"
            >
              <FiDownload className="text-xl" />
              View Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)]"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "right center",
              backgroundSize: "300% 100%",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
