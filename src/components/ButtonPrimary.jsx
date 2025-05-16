import React from "react";
import { Link } from "react-router-dom";

function ButtonPrimary({ text, link }) {
  return (
    <Link
      to={`/${link}`}
      className=""
    >
      <div className="button-primary font-archivo font-bold secondary-text-1 body-t">
        {/* White inner area */}
        <span className="relative z-10  rounded-full bg-white px-[23px] py-5 inline-block">{text}</span>
      </div>
    </Link>
  );
}

export default ButtonPrimary;
