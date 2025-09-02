import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm font-mono tracking-wider text-gray-900">

        <div className="mb-4 md:mb-0">
          ©2025 PERPLEXITY
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <a
            href="#"
            className="hover:underline flex items-center gap-1"
          >
            X ↗
          </a>
          <a
            href="#"
            className="hover:underline flex items-center gap-1"
          >
            LINKEDIN ↗
          </a>
          <a
            href="#"
            className="hover:underline flex items-center gap-1"
          >
            INSTAGRAM ↗
          </a>
          <a
            href="#"
            className="hover:underline flex items-center gap-1"
          >
            LEGAL ↗
          </a>
          <a
            href="#"
            className="hover:underline flex items-center gap-1"
          >
            PERPLEXITY ↗
          </a>
        </div>

        <div className="font-mono tracking-wider">
          COSMIC CURIOSITY
        </div>
      </div>
    </footer>
  );
}
