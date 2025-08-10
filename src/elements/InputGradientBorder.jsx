import React from "react";

const InputGradientBorder = () => {
  return (
    <div className="relative w-full">
      <input
        className="block h-12 w-full rounded-md border border-transparent 
                   bg-[linear-gradient(#0f172a,#0f172a),linear-gradient(to_right,#94a3b8,#64748b)] 
                   bg-origin-border px-3 text-sm font-normal text-slate-200 
                   transition-all duration-300 
                   [background-clip:padding-box,_border-box] 
                   placeholder:text-slate-500
                   focus:bg-[linear-gradient(#0f172a,#0f172a),linear-gradient(to_right,#93c5fd,#a78bfa)] 
                   focus:outline-none"
        placeholder="Type here..."
      />
    </div>
  );
};

export default InputGradientBorder;
