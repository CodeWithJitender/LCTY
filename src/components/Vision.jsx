import React from "react";
import AboutSLider from "./AboutSlider";

export default function Vision() {
  return (
    <section className="relative bg-white py-16 ps-4 md:ps-8 overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        {/* Background Mandala (optional) */}

        <div className="md:w-[70%]">
          {/* Content */}
          <div className="md:w-[80%] mx-auto relative z-10">
            {/* Heading */}
            <h2 className="h1 font-bold secondary-text-1">
              <span className="font-calvino">Lorem</span>
              <span className="font-calvino-italic"> dolor sit</span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 text-purple-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                fermentum commodo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In accumsan eros non fringilla faucibus.
              </p>
              <p>
                Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
                Duis eu nisi non orci fermentum commodo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                fermentum commodo.
              </p>
            </div>
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
