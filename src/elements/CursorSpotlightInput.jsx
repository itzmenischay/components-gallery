import React, { useRef, useState } from 'react';

const InputSpotlightBorder = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="relative w-full">
      <input
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        autoComplete="off"
        placeholder="Enter Text Here"
        type="text"
        name="text"
        className="h-12 w-full cursor-default rounded-md border border-gray-800 bg-gray-950 px-3.5 text-gray-100 placeholder:select-none placeholder:text-slate-500 transition-colors duration-500 focus:border-white focus:outline-none text-sm"
      />
      <input
        ref={divRef}
        disabled
        style={{
          border: '1px solid white',
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full rounded-md border border-[#fff] bg-transparent opacity-0 transition-opacity duration-500"
      />
    </div>
  );
};

export default InputSpotlightBorder;
