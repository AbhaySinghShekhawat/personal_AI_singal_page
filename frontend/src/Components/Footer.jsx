import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Instagram",
    icon: <FiInstagram />,
    url: "https://instagram.com/yourusername",
  },
  {
    name: "Email",
    icon: <FiMail />,
    url: "mailto:youremail@example.com",
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-[#05050a] border-t border-white/10 pt-12 pb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-80 animate-aurora"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_70%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-300 z-10"
      >
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Ayush Kaushik
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Crafting Code into Experiences
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-gray-300 hover:text-pink-400 transition duration-300 text-2xl"
            >
              {link.icon}
              <span className="absolute inset-0 rounded-full blur-md bg-pink-500 opacity-0 group-hover:opacity-30 transition duration-500"></span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-60"></div>
    </footer>
  );
}
