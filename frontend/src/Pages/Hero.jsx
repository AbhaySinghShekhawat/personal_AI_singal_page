import React from "react";
import { FiDownload } from "react-icons/fi"; 
import vid from '../assets/video/video1.mp4'

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center mt-[100px] px-6 sm:px-12 py-20 sm:py-28 lg:py-32 ">

      <div className="absolute top-[250px] left-0 w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] lg:w-[800px] lg:h-[800px]  pointer-events-none select-none">
        <img
          src="https://framerusercontent.com/images/F4RKAKmFyoRYVlTsUWN51wD1dg.png?scale-down-to=1024&width=1080&height=1080"
          alt="background-ball"
          className="w-full h-full object-contain animate-float-fast"
        />
      </div>

      <div className="relative z-10 max-w-4xl ">
        <p className="text-gray-500 text-2xl mb-3 ">
          Hi, I’m <span className="underline">Abhay </span>
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight  text-gray-900 mb-8">
          A <span className="italic">Full Stack Developer</span> </h1>

        <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-xl overflow-hidden">
          <img
            src="https://framerusercontent.com/images/k3ZIjIkNl1cb1bXlVoMjDX6Tlc.png?width=3894&height=2442"
            alt="browser-frame"
            className="absolute inset-0 w-full h-full object-contain "
          />

          <div className="absolute top-[10%] left-[10%] w-[80%] h-[74%] bg-black rounded-lg overflow-hidden">
            <video
              src={vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-[200px] w-full mx-auto flex flex-col items-center justify-center text-center px-4 ">
        <div className="absolute -top-13 -left-0 sm:-top-16 sm:-left-0 lg:-top-20 lg:-left-0 w-40 h-40 sm:w-40 sm:h-40 lg:w-40 lg:h-40 rounded-full pointer-events-none select-none opacity-80">
          <img
            src="https://framerusercontent.com/images/eReia3yfybtZ8P5576d6kF8NJIM.png?scale-down-to=1024&width=1080&height=1080"
            alt="ball"
            className="w-full h-full object-cover animate-float-slow"
          />
        </div>    

        <p className="relative text-4xl sm:text-3xl md:text-4xl text-black leading-snug mb-4 max-w-3xl">
          <span className="font-medium text-indigo-600">I build modern web apps</span> with clean UI &
          smooth user experience.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 italic max-w-2xl">
          Skilled in <span className="font-semibold">React, Node.js, </span>.
          Always curious, always building.
        </p>
      </div>
    </section>
  );
};

export default Hero;
