import React from "react";
import { Link } from "react-router-dom";

function ButtonPrimary({ text, link }) {
  return (
    <Link
      to={`/${link}`}
      className="relative inline-block px-10 py-4 text-pink-500 font-bold text-xl rounded-full overflow-hidden  font-archivo"
    >
      {/* Glow Border */}
      <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 opacity-75 blur-2xl group-hover:blur-3xl transition-all duration-500"></span>

      {/* White inner area */}
      <span className="relative z-10 bg-white rounded-full px-10 py-4">
        {text}
      </span>
    </Link>
  );
}

export default ButtonPrimary;
