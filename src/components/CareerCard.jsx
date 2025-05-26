import React from "react";
import { Link } from "react-router-dom";
// import { FaArrowUpRight } from "react-icons/fa6";

const CareerCard = ({ job, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`transition-all duration-300 ease-in-out cursor-pointer group  lg:flex items-center justify-end`}
    >
      {/* Job Image - shown only when active */}
      {isActive && (
        <div className="hidden lg:block lg:w-[30%]  rounded-xl shadow-xl lg:transition-opacity lg:duration-300 group-hover:opacity-100 z-20 relative lg:translate-x-3">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="lg:hidden block lg:w-[30%]  rounded-xl shadow-xl lg:transition-opacity lg:duration-300 group-hover:opacity-100 z-20 relative lg:translate-x-3">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Job Content */}
      <div
        className={`${
          isActive ? "bg-violet-400 text-white" : ""
        } lg:w-[70%] p-6 flex justify-between items-center gap-4 relative rounded-xl `}
      >
        <div className={`flex-1 ps-5`}>
          <h3
            className={`font-calvino h2 font-semibold font-playfair italic ${
              isActive ? "text-white" : "secondary-text-1"
            }`}
          >
            {job.title}
          </h3>
          <p
            className={`font-archivo body-t mt-1 ${
              isActive ? "text-white" : "body-t-color"
            }`}
          >
            {job.description}
          </p>
          <p
            className={`font-calvino-italic body-t  text-sm mt-2 ${
              isActive ? "text-white" : "body-t-color"
            }`}
          >
            Full Time ・ Sales
          </p>
        </div>

        {/* Icon */}
        <Link
          to={job.link}
          target="_blank"
          className="group-hover:scale-110 transition-transform"
        >
          <i
            class={`h1 fal fa-arrow-right -rotate-45 ${
              isActive ? "text-white" : "text-pink-400"
            } transition-transform group-hover:scale-110`}
          ></i>
          {/* <FaArrowUpRight
          className={`text-4xl ${isActive ? "text-white" : "text-pink-400"} `}
        /> */}
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
