import React from 'react'
import { Link } from "react-router-dom";

function ButtonPrimary({ text, link }) {
  return (
    <Link
      to={`${link}`}
      className=""
    >
      <div className="button-primary font-archivo  secondary-text-1 body-t">
        {/* White inner area */}
        <span className="relative z-10  rounded-full bg-white py-3 px-5 md:px-[23px] md:py-5 inline-block">
          {text}
        </span>
      </div>
    </Link>
  )
}

export default ButtonPrimary
