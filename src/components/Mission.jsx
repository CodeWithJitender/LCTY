import React from "react";
import AboutSLider from "./AboutSlider";
import Hero from "./Hero";

export default function Mission() {
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
   
    textAlign:"text-start",
    // spacing:"p-4"
  };
  return (
    <section className="relative bg-white py-16 pe-4 md:pe-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* Background Mandala (optional) */}
 <div className="w-full md:w-[30%]">
          <img
            src="mandala-2.png"
            alt="decorative mandala"
            className="max-w-[250px] md:max-w-[400px] me-auto"
          />
        </div>
        <div className="md:w-[70%] ps-4">
          {/* Content */}
          <div className="md:w-[80%] mx-auto relative z-10">
            <Hero data={data} />
           
          </div>
        </div>
       
      </div>
      {/* Images */}
      <AboutSLider />
    </section>
  );
}
