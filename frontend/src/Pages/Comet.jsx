import React from "react";
import { FiDownload } from "react-icons/fi";
import img from '../assets/images/cimage.jpg'


export default function ImageBoxes() {

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full   mx-auto px-4">

        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "left center",
              backgroundSize: "300% 100%",
            }}
          />
        </div>

        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center center",
              backgroundSize: "300% 100%",
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/20">
            <h2 className="text-3xl font-serif mb-4">Portfolio</h2>
              
          </div>
        </div>

        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "right center",
              backgroundSize: "300% 100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
