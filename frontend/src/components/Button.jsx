import React from "react";

function Button({
  text,
  size = "text-lg",
  padding = "px-4 py-2",
  bgColor = "bg-blue-500",
  textColor = "text-black",
  hoverBgColor = "hover:bg-blue-600",
  hoverTextColor = "hover:text-white",
  borderColor = "border-blue-700",
  hoverBorderColor = "hover:border-blue-600",
  width = "w-full",
  onClick,
}) {
  return (
    <button
      className={`border ${width} ${borderColor} ${padding} ${bgColor} ${textColor} ${size} rounded font-bold transition-all duration-300 ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
