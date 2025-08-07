const HoverButton = ({ label, href }) => {
  return (
    <button className="font-semibold text-white text-lg h-[45px] w-[150px] rounded-full cursor-pointer transition-all duration-500 transform hover:scale-95 bg-gradient-to-r from-[#ff8d37] via-[#ff08ef] to-[#7300ff] bg-[length:200%] bg-right hover:bg-left">
      <a href={href} target="_blank">
        {label}
      </a>
    </button>
  );
};

export default HoverButton;
