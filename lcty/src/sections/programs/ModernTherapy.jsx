import React from "react";
import ModernTherapySlider from "./ModernTherapySlider";
import Hero from "../../components/Hero";

function ModernTherapy() {
  const heading = {
    title: [
      { text: "Modern", class: "font-calvino" },
      { text: "therapy", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
        class: "text-center",
      },
    ],
    textAlign:"text-center",
  };
  return (
    <div className="modern-therapy ">
      <div className="container-fixed">
        <div className="max-w-7xl m-auto text-center secondary-text-1">
          <Hero data={heading} />
        </div>
        
      </div>
      <div className="mt-5">
          <ModernTherapySlider />
        </div>
    </div>
  );
}

export default ModernTherapy;
