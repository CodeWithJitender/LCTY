import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ data }) {
  const { title, image, redirectUrl, bgColor, btnBg, btnText} = data;
  const navigate = useNavigate();
  return (
    <div className="card p-3 md:p-5 cursor-pointer"
       onClick={() => navigate(data.redirectUrl)}
    >
      <div className="card-img">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className={`card-text ${bgColor? `${bgColor} body-t-color`:"bg-[#ff96ff] text-white"}`}>
        <Link to={redirectUrl} className="flex items-center justify-between">
          <div className="card-title font-archivo text-white font-semibold p-3">{title}</div>
          <div className={`card-icon w-[60px] h-[60px]  leading-[60px] text-center ${btnText} ${btnBg} btn-t`}>
           <i class="fal fa-arrow-up rotate-45 "></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
