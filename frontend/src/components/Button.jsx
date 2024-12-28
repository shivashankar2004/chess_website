import React from "react";

function Button({ text, size = "text-3xl", padding = "px-12 py-3" }) {
  return (
    <>
      <button
        className={`border border-slate-200 ${padding} bg-slate-600 ${size} hover:text-slate-600 hover:bg-white hover:border hover:border-slate-700`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
