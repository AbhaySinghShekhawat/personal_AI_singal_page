import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPaintBrush, FaMobileAlt, FaGlobe } from "react-icons/fa";

const Features = () => {
  
  const skills = [
    { name: "Frontend Development", icon: <FaReact size={30} className="text-sky-400" /> },
    { name: "Backend Development", icon: <FaNodeJs size={30} className="text-green-500" /> },
    { name: "Database Management", icon: <FaDatabase size={30} className="text-yellow-400" /> },
    { name: "UI/UX Design", icon: <FaPaintBrush size={30} className="text-pink-400" /> },
    { name: "Responsive Design", icon: <FaMobileAlt size={30} className="text-purple-400" /> },
    { name: "Web Applications", icon: <FaGlobe size={30} className="text-blue-400" /> },
  ];

  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-6 md:px-16">
      <div className="relative z-10 max-w-6xl w-full text-center">

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight text-gray-900 mb-8">
          <span className="italic text-white">What I Do</span> 
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          I build modern, responsive, and scalable web applications with
          beautiful design and high performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;

