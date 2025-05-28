import React, { useState } from 'react'
import Heading from '../../components/Heading';

function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
    const data = {
        title: [
            { text: "Lorem ipsum", class: "font-calvino" },
            { text: "dolor sit amet, consectetur", class: "font-calvino-italic" },
            { text: "adipiscing elit.  In accumsan eros non fringilla faucibus.", class: "font-calvino" },
        ],
        textAlign: "md:text-end",
        spacing: "mb-4 lg:mb-10",
        fontSize: "h2 leading-tight",
        fontColor: "secondary-text-1",
    };
     const programs = [
    {
      number: "01.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
      image: "Yoga3.png",
      bg: "#F9D9E4",
    },
    {
      number: "02.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
      image: "Yoga3.png",
      bg: "#D4E9FF",
    },
    {
      number: "03.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
      image: "Yoga3.png",
      bg: "#FFEFD4",
    },
    {
      number: "04.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
      image: "Yoga3.png",
      bg: "#E0FFE6",
    },
  ];
  return (
    <section className="" >
      <div className="container-fixed">
        {/* Heading */}
        <div className="max-w-[1000px] md:ms-auto">
        <Heading data={data} />
        </div>

        <p className="block lg:hidden body-t font-archivo mt-3 leading-[100%] body-t-color mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
          eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
          bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.
        </p>

        {/* Mobile Image */}
        <img
          src={programs[activeIndex].image}
          alt="Program Image"
          className="rounded-lg w-full object-cover block lg:hidden mb-8"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image Box - Desktop */}
          <div
            className="hidden lg:block rounded-lg transition-all duration-500 md:order-2"
            style={{
              backgroundColor: programs[activeIndex].bg,
              padding: "20px",
            }}
          >
            <img
              src={programs[activeIndex].image}
              alt="Program"
              className="rounded-lg w-full object-cover transition duration-300"
            />
          </div>

          {/* Right Text & Boxes */}
          <div className='md:order-1'>
            <p className="body-t font-archivo mt-3 leading-[100%] body-t-color hidden lg:block ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.
            </p>

            <div className="space-y-4 mt-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-3 lg:p-6 flex items-end justify-between gap-4 cursor-pointer transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#AE93FF] text-white"
                      : "hover:bg-[#AE93FF] group"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <h3
                      className={` h2 font-archivo transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "secondary-text-1"
                      }`}
                    >
                      {program.number}
                    </h3>
                    <div>
                      <h3
                        className={` h2 font-calvino transition-colors ${
                          activeIndex === index
                            ? "text-white"
                            : "secondary-text-1"
                        }`}
                      >
                        {program.title}
                      </h3>
                      <p
                        className={`body-t font-archivo mt-3 leading-5  transition-colors ${
                          activeIndex === index ? "text-white" : "body-t-color"
                        }`}
                      >
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <i
                    className={`far fa-arrow-up h2 rotate-45 transition-colors ${
                      activeIndex === index ? "text-white" : "body-t-color"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection
