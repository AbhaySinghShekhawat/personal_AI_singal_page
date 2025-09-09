import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbLayoutGrid } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Projects", href: "#download" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#hero"
          className={`text-2xl font-extrabold tracking-tight ${
            scrolled
              ? "bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          Ayush Kaushik
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
                  : scrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-500 ${
                  activeSection === link.href.slice(1)
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full shadow-md transition duration-300 hover:scale-105 ${
              scrolled
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
            }`}
          >
            <FiDownload className="text-lg" />
            <span className="text-sm font-medium">Download</span>
          </button>

          <button
            className={`hidden md:flex w-10 h-10 items-center justify-center rounded-full transition hover:scale-110 ${
              scrolled
                ? "bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <TbLayoutGrid className="text-xl" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition ${
              scrolled
                ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-lg flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium ${
                  activeSection === link.href.slice(1)
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}

            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <FiDownload className="text-lg" />
              <span className="text-sm font-medium">Download</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
