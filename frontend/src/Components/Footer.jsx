import React from "react";
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
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm font-mono tracking-wider text-gray-900">
        
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>

        <div className="font-mono tracking-wider text-gray-700 text-center md:text-right">
        Crafting Code into Experiences
        </div>
      </div>
    </footer>
  );
}
