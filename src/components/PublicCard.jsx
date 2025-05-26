import React from "react";
import { Link } from "react-router-dom";

function PublicCard({ data }) {
  const { name, img, description, tags, link } = data;
  return (
    <Link to={link} className="public-card block mb-8">
      <div className="public-card-img h-[350px] md:h-[500px] w-full relative">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="w-[30px] h-[30px] leading-[30px] md:w-[50px] md:h-[50px] md:leading-[50px] text-center bg-white body-t-color absolute right-5 bottom-5">
          <i className="fal fa-arrow-up rotate-45"></i>
        </div>
      </div>
      <div className="public-card-text mt-4 p-4 max-w-[1200px]">
        <h2 className="h2 font-calvino secondary-text-1">{name}</h2>
        <p className="body-t body-t-color mt-2">{description}</p>
        <div className="tags flex flex-wrap gap-2 ">
          {tags.map((item, index) => (
            <span key={index} className="font-calvino-italic body-t body-t-color mt-4">
              {item}
              {index < tags.length - 1 && (
                <span className="mx-2">&bull;</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default PublicCard;
