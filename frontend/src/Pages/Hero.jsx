

import React from "react";
import { FiDownload } from "react-icons/fi"; // React Icons

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center mt-[100px] px-6 sm:px-12 py-20 sm:py-28 lg:py-32 ">
      {/* Background Ball */}
      <div className="absolute top-[250px] left-0 w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] lg:w-[800px] lg:h-[800px]  pointer-events-none select-none">
        <img
          src="https://framerusercontent.com/images/F4RKAKmFyoRYVlTsUWN51wD1dg.png?scale-down-to=1024&width=1080&height=1080"
          alt="background-ball"
          className="w-full h-full object-contain animate-float-fast"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl ">
        <p className="text-gray-500 text-sm sm:text-base mb-3 ">
          A new browser from <span className="underline">Perplexity</span>
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight  text-gray-900 mb-8">
          A personal AI <span className="italic">assistant</span>
        </h1>

        {/* Button */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-black transition relative shadow-md">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-gray-300">
              <FiDownload size={16} className="text-black" />
            </span>
            Get Comet
          </button>
        </div>

        {/* Frame with video (like YouTube window) */}
        <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-xl overflow-hidden">
          {/* Background frame image (YouTube-like browser window) */}
          <img
            src="https://framerusercontent.com/images/k3ZIjIkNl1cb1bXlVoMjDX6Tlc.png?width=3894&height=2442"
            alt="browser-frame"
            className="absolute inset-0 w-full h-full object-contain "
          />

          {/* Video inside, perfectly fit */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[74%] bg-black rounded-lg overflow-hidden">
            <video
              src="https://framerusercontent.com/assets/CtSYQwWgD3v3HDe3HMRPnHbvGOk.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
       <div className="relative mt-[200px] w-full  mx-auto flex flex-col items-center justify-center text-center px-4 ">
              <div className="absolute -top-13 -left-0 sm:-top-16 sm:-left-0 lg:-top-20 lg:-left-0 w-40 h-40 sm:w-40 sm:h-40 lg:w-40 lg:h-40 rounded-full pointer-events-none select-none opacity-80">
        <img
          src="https://framerusercontent.com/images/eReia3yfybtZ8P5576d6kF8NJIM.png?scale-down-to=1024&width=1080&height=1080"
          alt="ball"
          className="w-full h-full object-cover animate-float-slow"
        />
      </div>    
      <p className=" relative text-4xl  sm:text-3xl md:text-4xl text-black leading-snug mb-4 max-w-3xl">
        Comet is an <span className="font-medium">AI-powered browser</span> that acts as a
        personal assistant and thinking partner.
      </p>
      <p className="text-lg sm:text-xl text-gray-700 italic max-w-2xl">
        Boost your <span className="font-semibold">focus</span>, streamline your workflow,
        and turn curiosity into momentum.
      </p>
    </div>
    </section>
  );
};

export default Hero;
