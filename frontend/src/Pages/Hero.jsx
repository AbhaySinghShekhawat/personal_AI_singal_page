import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import VanillaTilt from "vanilla-tilt";
import vid from "../assets/video/video1.mp4";

const Hero = () => {
  useEffect(() => {
    const tilt = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(tilt, {
      max: 20,
      speed: 600,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden bg-[#05050a]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-aurora"
      ></motion.div>

      <motion.img
        src="https://framerusercontent.com/images/F4RKAKmFyoRYVlTsUWN51wD1dg.png"
        alt="ball"
        className="absolute top-[120px] left-[-100px] w-[250px] lg:w-[500px] drop-shadow-[0_0_100px_rgba(99,102,241,0.9)]"
        initial={{ scale: 0.9 }}
        animate={{
          scale: 1,
          y: [0, -40, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://framerusercontent.com/images/eReia3yfybtZ8P5576d6kF8NJIM.png"
        alt="ball"
        className="absolute bottom-20 right-0 w-[200px] lg:w-[400px] drop-shadow-[0_0_100px_rgba(236,72,153,0.9)]"
        initial={{ scale: 0.9 }}
        animate={{
          scale: 1,
          y: [0, 30, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-xl mb-4 font-light"
        >
          Hi, I’m <span className="underline text-indigo-400">Ayush</span>
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="relative text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent inline-block overflow-hidden"
        >
          <span>
            Full Stack Developer
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-text-shine"></span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about solving{" "}
          <span className="text-pink-400 font-semibold">complex problems</span>,{" "}
          <span className="text-purple-400 font-semibold">through intuitive</span>{" "}
          <span className="text-indigo-400 font-semibold">design</span>. Crafting
          immersive experiences through design, code, and creativity — turning ideas
          into reality, one pixel at a time.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
        className="tilt-card relative mt-16 w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(236,72,153,0.6)] border border-white/10"
      >
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500/40"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-16 relative z-10 flex flex-col items-center gap-6"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-2 px-10 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 shadow-[0_0_40px_rgba(236,72,153,0.7)] overflow-hidden group transition-all duration-500 hover:shadow-[0_0_80px_rgba(236,72,153,0.9)]"
        >
          <FiDownload className="text-xl" /> Download Resume
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
