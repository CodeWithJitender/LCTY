import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {  } from "react-router-dom"; // if using react-router

function Card({ data }) {
  const { title, image, redirectUrl } = data;
  const navigate = useNavigate();
  return (
    <div className="card px-2 md:p-5 cursor-pointer"
       onClick={() => navigate(data.redirectUrl)}
    >
      <div className="card-img">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="card-text primary-bg-2">
        <Link to={redirectUrl} className="flex items-center justify-between">
          <div className="card-title font-archivo text-white font-semibold p-3">{title}</div>
          <div className="card-icon w-[60px] h-[60px] h- leading-[60px] text-center bg-[#ff96ff] text-white btn-t">
           <i class="fal fa-arrow-up rotate-45 "></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
