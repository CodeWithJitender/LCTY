import React, { useState } from "react";
import CareerCard from "../../components/CareerCard";

const careers = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png", // replace with actual image path
    link: "https://www.example.com", // replace with actual link
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link: "https://www.example.com", // replace with actual link
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link: "https://www.example.com", // replace with actual link
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link: "https://www.example.com", // replace with actual link
  },
];

const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="">
    
      <div className="container-fixed">
         {/* Heading */}
            <h2 className="h1 font-bold secondary-text-1 text-center mb-10">
              <span className="font-calvino">Lorem</span>
              <span className="font-calvino-italic"> dolor sit</span>
            </h2>
        <div className="space-y-6 relative">
          {careers.map((job, index) => (
            <CareerCard
              key={index}
              job={job}
              isActive={index === activeIndex}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
