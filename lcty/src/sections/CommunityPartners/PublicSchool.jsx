import React from "react";
import PublicCard from "../../components/PublicCard";

function PublicSchool() {
  const data = [
    {
      name: "Lorem ipsum dolor sit amet",
      img: "public-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      tags: ["Tag", "Tag", "Tag"],
      link: "",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      img: "public-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      tags: ["Tag", "Tag", "Tag"],
      link: "",
    },
    {
      name: "Lorem ipsum dolor sit amet",
      img: "public-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      tags: ["Tag", "Tag", "Tag"],
      link: "",
    },
  ];
  return (
    <section className="public-school">
      <div className="container-fixed">
        <h2 className="h1 text-center secondary-text-1 mb-8">
          <span className="font-calvino">Public</span>
          <span className="font-calvino-italic"> schools for </span>
          <span className="font-calvino">ABA</span>
        </h2>
        <div className="school-container">
          {data.map((item, index) => (
            <PublicCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PublicSchool;
