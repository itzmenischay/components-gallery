const GradientCard = ({ children }) => {
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Blurred gradient background glow */}
      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#eab308] bg-[length:200%_200%] animate-[gradient-shift_5s_linear_infinite]" />

      {/* Animated gradient border */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#eab308] bg-[length:200%_200%] animate-[gradient-shift_5s_linear_infinite]">
        <div className="w-40 h-40 rounded-2xl bg-black flex items-center justify-center text-white text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
