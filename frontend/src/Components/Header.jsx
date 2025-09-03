import React from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbLayoutGrid } from "react-icons/tb";
const Header = () => {
  return (
    <div className="relative w-full">
      <div className="absolute -top-12 -right-16 sm:-top-16 sm:-right-24 lg:-top-24 lg:-right-32 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden pointer-events-none select-none opacity-80">
        <img
          src="https://framerusercontent.com/images/eReia3yfybtZ8P5576d6kF8NJIM.png?scale-down-to=1024&width=1080&height=1080"
          alt="ball"
          className="w-full h-full object-cover animate-float-fast"
        />
      </div>

      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-transparent shadow-none z-50">
        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition relative z-10">
          <HiOutlineMenuAlt2 className="text-xl sm:text-2xl" />
        </button>

        <div className="flex items-center gap-2 sm:gap-3 relative z-10">

          <button className="flex items-center gap-1 sm:gap-2 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-800 transition">
            <FiDownload className="text-base sm:text-lg" />
            <span className="hidden md:inline text-sm font-medium">Download</span>
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <TbLayoutGrid className="text-lg sm:text-xl" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
