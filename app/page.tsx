"use client";

import { useState } from "react";
import TLDR from "@/components/TLDR";
import HolyYapSesh from "@/components/HolyYapSesh";

export default function TogglePage() {
  const [mode, setMode] = useState<"tldr" | "yap">("tldr");

  const handleToggle = () => {
    setMode(mode === "tldr" ? "yap" : "tldr");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center p-8">
       {/* Dynamic background blobs */}
      <div className="absolute inset-0 overflow-hidden transition-all duration-700">
        <div
          className={`absolute w-[50vw] h-[50vw] rounded-full blur-3xl opacity-70 transition-colors duration-700 ${
            mode === "tldr" ? "bg-green-400 left-[5%] top-[10%]" : "bg-pink-500 left-[30%] top-[30%]"
          }`}
        ></div>
        <div
          className={`absolute w-[45vw] h-[45vw] rounded-3xl blur-3xl opacity-60 transition-colors duration-700 ${
            mode === "tldr" ? "bg-blue-400 right-[10%] top-[50%]" : "bg-purple-500 right-[5%] bottom-[10%]"
          }`}
        ></div>
      </div>

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay animate-grain"></div>

      {/* Title */}
      <h1 className="glitch-text mb-16 relative z-10 text-6xl font-bold">misterblu.xyz</h1>

      {/* Toggle Switch */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="flex items-center space-x-4">
          <span className={`${mode === "tldr" ? "text-green-300" : "text-gray-500"} text-lg font-semibold`}>
            TL;DR
          </span>

          <button
            onClick={handleToggle}
            className={`relative w-24 h-12 rounded-full transition-all duration-300 ${
              mode === "tldr" ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-10 h-10 bg-black rounded-full transform transition-transform duration-300 ${
                mode === "yap" ? "translate-x-12" : ""
              }`}
            ></div>
          </button>

          <span className={`${mode === "yap" ? "text-blue-300" : "text-gray-500"} text-lg font-semibold`}>
            Holy Yap Sesh
          </span>
        </div>
      </div>

      
      {/* Render Content */}
      <div className="relative z-10 w-full max-w-5xl">
        {mode === "tldr" ? <TLDR /> : <HolyYapSesh />}
      </div>

    </main>
  );
}
