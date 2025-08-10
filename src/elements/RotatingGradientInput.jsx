import React from "react";

const RotatingGradientInput = () => {
  return (
    <div className="relative w-full rounded-lg p-[1.5px] overflow-hidden">
      <div
        className="absolute inset-[-40%] bg-[conic-gradient(from_0deg,#b0e0e6,#fbc2eb,#e0bbff,#ffd1ff,#a1c4fd,#c2e9fb,#b0e0e6)]
                     animate-[spin_10s_linear_infinite] blur-sm opacity-90"/>
      <div className="relative z-10 flex items-center rounded-md bg-gray-900/90 px-2 py-1 focus-within:ring-2 focus-within:ring-purple-400/30">
        <input
          className="p-2 bg-transparent border-none outline-none text-gray-100 w-full text-sm placeholder-slate-500"
          placeholder="Type here..."/>
      </div>
    </div>
  );
};

export default RotatingGradientInput;
