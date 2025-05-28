import React from "react";
import AboutSLider from "./AboutSlider";
import Hero from "./Hero";
import Heading from "./Heading";

export default function Vision() {
  const data = {
    title: [
      { text: "Lorem", class: "font-calvino" },
      { text: "dolor sit", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
        class: "text-center",
      },
      {
        text: " Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
        class: "text-center",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
        class: "text-center",
      },
    ],

    textAlign: "text-start",
    fontSize: "h1",
  };
  return (
    <section className="relative bg-white py-16 ps-4 md:ps-8 overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        {/* Background Mandala (optional) */}

        <div className="md:w-[70%]">
          {/* Content */}
          <div className="md:w-[80%] mx-auto relative z-10">
            <div className="mb-4">
              <Heading data={data} />
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In accumsan eros non fringilla faucibus.
            </p>
            <p className="mb-4">
              Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
              Duis eu nisi non orci fermentum commodo.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <img
            src="mandala.png"
            alt="decorative mandala"
            className="max-w-[250px] md:max-w-[400px] ms-auto"
          />
        </div>
      </div>
      {/* Images */}
      <AboutSLider />
    </section>
  );
}
