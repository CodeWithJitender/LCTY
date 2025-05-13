import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  } from "react-router-dom"; // if using react-router

function Card({ data }) {
  const { title, image, redirectUrl } = data;
  const navigate = useNavigate();
  return (
    <div className="card  p-2"
       onClick={() => navigate(data.redirectUrl)}
    >
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-text primary-bg-2">
        <Link to={redirectUrl} className="flex items-center justify-between">
          <div className="card-title font-archivo text-white font-semibold p-3">{title}</div>
          <div className="card-icon w-[50px] h-[50px] leading-[50px] text-center bg-[#ff96ff] text-white">
           <i class="fal fa-arrow-up rotate-45 "></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
