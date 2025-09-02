import React from "react";
import { FiDownload } from "react-icons/fi";

const Features = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div
        className="relative py-16 md:py-20 px-4 md:px-20 min-h-screen flex flex-col items-center justify-center rounded-xl bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/4M3Rmtye1aP2adi4PMKLsoYPxQ.jpg?width=3200&height=2133')",
        }}
      >
        {/* Video wrapper */}
        <div className="relative w-full max-w-6xl z-10">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              src="https://framerusercontent.com/assets/8R14II7Yr1X3t6Np2sJL8Jar6I.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6 md:mt-10 z-10">
          <button className="flex items-center gap-3 bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium hover:bg-gray-100 transition shadow-md">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white border border-gray-300">
              <FiDownload size={16} />
            </span>
            Get Comet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
