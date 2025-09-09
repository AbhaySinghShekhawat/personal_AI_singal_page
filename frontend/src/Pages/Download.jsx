import React, { useEffect } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import img from "../assets/images/img1.avif";
import img1 from "../assets/images/img2.jpg";
import img2 from "../assets/images/img3.avif";
import img3 from "../assets/images/img4.avif";

const backendProjects = [
  {
    id: 1,
    title: "Authentication System",
    description:
      "A secure user authentication system with JWT, bcrypt, and role-based access. Includes signup, login, and password reset.",
    image: img,
  },
  {
    id: 2,
    title: "E-commerce API",
    description:
      "A REST API built with Node.js and Express for managing products, users, and orders. Integrated with MongoDB.",
    image: img1,
  },
];

const frontendProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio built with React, TailwindCSS, and Framer Motion animations.",
    image: img2,
  },
  {
    id: 2,
    title: "E-commerce Frontend",
    description:
      "A full-featured e-commerce frontend using React, Redux, and Stripe integration for payments.",
    image: img3,
  },
];

const Download = () => {
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
    <>
      <section id="download" className="relative w-full py-24 overflow-hidden bg-[#05050a]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-70 animate-aurora"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative text-center  max-w-3xl mx-auto z-10"
        >
          <h2 className="text-4xl md:text-5xl pb-5 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            My <span className="italic  font-serif text-white">Backend</span> Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Robust server-side applications with APIs, databases, and authentication.
          </p>
        </motion.div>
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 z-10">
          {backendProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="tilt-card bg-black/40 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.3)] p-6 transition-all duration-500 hover:shadow-[0_0_70px_rgba(236,72,153,0.6)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md mb-6 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold text-white text-center">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative w-full py-24 overflow-hidden bg-[#05050a]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-70 animate-aurora"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative text-center max-w-3xl mx-auto z-10"
        >
          <h2 className="text-4xl md:text-5xl pb-5 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
            My <span className="italic font-serif text-white">Frontend</span> Projects
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Interactive and modern UIs using React, Next.js, and TailwindCSS.
          </p>
        </motion.div>
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 z-10">
          {frontendProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="tilt-card bg-black/40 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.3)] p-6 transition-all duration-500 hover:shadow-[0_0_70px_rgba(236,72,153,0.6)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md mb-6 w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold text-white text-center">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Download;
