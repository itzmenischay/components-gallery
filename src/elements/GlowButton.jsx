import React from 'react';

const GlowButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='relative z-10 w-[150px] px-4 py-2 rounded-full bg-white text-black cursor-pointer
        hover:scale-95 transition-all duration-500
        before:absolute before:inset-0 before:rounded-full before:bg-white before:blur-xl before:opacity-50 before:z-[-1]'
    >
      {children}
    </button>
  );
};

export default GlowButton;
