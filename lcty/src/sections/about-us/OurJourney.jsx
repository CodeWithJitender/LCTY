import React from "react";
import Number from "../../components/Number";
import JourneyCard from "../../components/JourneyCard";

const steps = [
  {
    year: "2019",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "journey-1.jpg",
  },
  {
    year: "2020",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "journey-2.jpg",
  },
  {
    year: "2021",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
    image: "journey-3.jpg",
  },
];

export default function OurJourney() {
  return (
    <section className="py-16 ">
      {/* Title */}
      <h2 className="h1 secondary-text-1 leading-none text-center mb-16">
        <span className="font-calvino">Our </span>
        <span className="font-calvino-italic">journey</span>
      </h2>

      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0">
            <Number number="1" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-5">
            <div className="md:w-[40%]">
              <JourneyCard />
            </div>
            <div className="journey-img md:w-[40%]">
              <img src="journey-1.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0">
            <Number number="2" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:gap-5">
             <div className="journey-img md:w-[40%]">
              <img src="journey-2.jpg" alt="" className="w-full" />
            </div>
            <div className="md:w-[40%]">
              <JourneyCard />
            </div>
           
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0">
            <Number number="3" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-5">
            <div className="md:w-[40%]">
              <JourneyCard />
            </div>
            <div className="journey-img md:w-[40%]">
              <img src="journey-3.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
