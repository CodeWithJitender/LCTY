import React, { useState } from "react";
import CareerCard from "../../components/CareerCard";

const careers = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png", // replace with actual image path
    link:"https://www.example.com", // replace with actual link

  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link:"https://www.example.com", // replace with actual link

  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link:"https://www.example.com", // replace with actual link

  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "career.png",
    link:"https://www.example.com", // replace with actual link
  },
];

const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-4 md:px-20 max-w-screen-xl mx-auto">
      <h2 className="text-5xl text-center font-playfair italic text-pink-400 mb-12">
        Lorem <span className="font-normal">dolor sit</span>
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
    </section>
  );
};

export default Careers;
