import React, { useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import profileImg from "../assets/images/imgp.jpg"; 

const aboutContent = [
  {
    type: "intro",
    text: (
      <>
        Part-time coder, full-time dreamer, and occasional snack enthusiast.
        Currently pursuing my{" "}
        <span className="font-semibold text-white">Bachelor of Technology</span>{" "}
        from JIMSEMTC Greater Noida, affiliated with{" "}
        <span className="font-bold text-pink-400">
          Guru Gobind Singh Indraprastha University
        </span>
        . I’m on a mission to turn caffeine into code and ideas into reality.
      </>
    ),
  },
  {
    type: "para",
    text: (
      <>
        When I’m not crafting sleek designs or building apps, you’ll find me
        gaming, binge-watching sitcoms, or over-analyzing life decisions 🎮.
      </>
    ),
  },
  {
    type: "para",
    text: (
      <>
        As a theatre artist & musician, I’ve mastered both dramatic pauses and
        awkward guitar solos 🎸. Whether brainstorming ideas, coding apps, or
        cracking dad jokes — I believe{" "}
        <span className="font-semibold text-pink-400">
          creativity thrives best with a touch of chaos.
        </span>
      </>
    ),
  },
  {
    type: "para",
    text: (
      <>
        So, if you’re here to collaborate, chat, or just share memes — hit me up
        .
      </>
    ),
  },
];

const About = () => {
  useEffect(() => {
    const tilt = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(tilt, {
      max: 15,
      speed: 600,
      glare: true,
      "max-glare": 0.4,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#05050a] px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-60 animate-aurora"></div>

      <motion.img
        src="https://framerusercontent.com/images/F4RKAKmFyoRYVlTsUWN51wD1dg.png"
        alt="ball"
        className="absolute top-[120px] left-[-100px] w-[250px] lg:w-[400px] drop-shadow-[0_0_80px_rgba(99,102,241,0.9)]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1, y: [0, -40, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="https://framerusercontent.com/images/eReia3yfybtZ8P5576d6kF8NJIM.png"
        alt="ball"
        className="absolute bottom-20 right-0 w-[200px] lg:w-[350px] drop-shadow-[0_0_80px_rgba(236,72,153,0.9)]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1, y: [0, 30, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="tilt-card relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.4)] border border-white/10"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={profileImg}
            alt="profile"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl ring-2 ring-pink-500/30"></div>
        </motion.div>

        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-snug">
            Hey there!{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              I'm Ayush
            </span>
          </h2>

          {aboutContent.map((item, idx) => (
            <motion.p
              key={idx}
              className={`leading-relaxed ${
                item.type === "intro" ? "text-gray-300" : "text-gray-400"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {item.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
