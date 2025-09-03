import React from "react";
import img from '../assets/images/img1.avif'
import img1 from '../assets/images/img2.jpg'
import img2 from '../assets/images/img3.avif'
import img3 from '../assets/images/img4.avif'


const backendProjects = [
  {
    id: 1,
    title: "Authentication System",
    description:
      "A secure user authentication system with JWT, bcrypt, and role-based access. Includes signup, login, and password reset.",
    image:img
  },
  {
    id: 2,
    title: "E-commerce API",
    description:
      "A REST API built with Node.js and Express for managing products, users, and orders. Integrated with MongoDB.",
    image:img1
  },
];

const frontendProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio built with React, TailwindCSS, and Framer Motion animations.",
    image:img2
  },
  {
    id: 2,
    title: "E-commerce Frontend",
    description:
      "A full-featured e-commerce frontend using React, Redux, and Stripe integration for payments.",
    image:img3
  },
];

const Download = () => {
  return (
    <>
      <section className="relative w-full py-24 bg-white">
      
        <img
          src="https://framerusercontent.com/images/FOIQJjlpuUktsmNqzA3QoB8f2oU.png"
          alt="decor"
          className="absolute top-0 left-[-60px] w-40 h-40 rounded-full animate-float-fast"
        />
        <img
          src="https://framerusercontent.com/images/FOIQJjlpuUktsmNqzA3QoB8f2oU.png"
          alt="decor"
          className="absolute top-[-40px] right-[-60px] w-44 h-44 rounded-full animate-float-slow"
        />

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            My <span className="italic font-serif text-indigo-600">Backend</span> Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Robust server-side applications with APIs, databases, and authentication.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {backendProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAFAF8] rounded-2xl shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full py-24 bg-white">

        <img
          src="https://framerusercontent.com/images/FOIQJjlpuUktsmNqzA3QoB8f2oU.png"
          alt="decor"
          className="absolute top-0 left-[-60px] w-40 h-40 rounded-full animate-float-slow"
        />
        <img
          src="https://framerusercontent.com/images/FOIQJjlpuUktsmNqzA3QoB8f2oU.png"
          alt="decor"
          className="absolute top-[-40px] right-[-60px] w-44 h-44 rounded-full animate-float-fast"
        />

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            My <span className="italic font-serif text-pink-600">Frontend</span> Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Interactive and modern UIs using React, Next.js, and TailwindCSS.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {frontendProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAFAF8] rounded-2xl shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Download;
