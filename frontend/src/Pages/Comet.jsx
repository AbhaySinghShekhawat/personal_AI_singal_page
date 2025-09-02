import React from "react";
import { FiDownload } from "react-icons/fi";


export default function ImageBoxes() {
  const overlayImage =
    "https://framerusercontent.com/images/8oi10pnaCszaUl35SdVUv7X22Es.jpg?scale-down-to=4096&width=3000&height=5353";

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full   mx-auto px-4">
        {/* Box 1 - Left Part */}
        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${overlayImage})`,
              backgroundPosition: "left center",
              backgroundSize: "300% 100%",
            }}
          />
        </div>

        {/* Box 2 - Center Part */}
        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${overlayImage})`,
              backgroundPosition: "center center",
              backgroundSize: "300% 100%",
            }}
          />

          {/* Text + Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/20">
            <h2 className="text-3xl font-serif mb-4">Comet is here</h2>
                <div className="flex justify-center mt-8 z-10">
                     <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-white transition relative shadow-md">
                       <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white border border-gray-300">
                         <FiDownload size={16} className="text-white" />
                       </span>
                       Get Comet
                     </button>
                   </div>
          </div>
        </div>

        {/* Box 3 - Right Part */}
        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${overlayImage})`,
              backgroundPosition: "right center",
              backgroundSize: "300% 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
