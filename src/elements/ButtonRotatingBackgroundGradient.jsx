const ButtonRotatingBackgroundGradient = ({ text }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-gray-900">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#facc15_0%,#1e3a8a_50%,#facc15_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-100 backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
