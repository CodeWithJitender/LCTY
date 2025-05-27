import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import Card from "../../components/Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import Hero from "../../components/Hero";
gsap.registerPlugin(ScrollTrigger);

function SuccessStories() {
  // const containerRef = useRef();
  // const headingRef = useRef();
  // useGSAP(() => {
  //   const split = new SplitType(headingRef.current, {
  //     type: "lines",
  //   });

  //   gsap.from(split.lines, {
  //     opacity: 0,
  //     y: 400,
  //     duration: 1,
  //     stagger: 0.1,
  //     ease: "power4.out",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top center",
  //       // end: "top 80%",
  //       scroller: ".main",
  //       // scrub: true,
  //     },
  //   });

  //   return () => {
  //     split.revert();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [containerRef.current, headingRef.current]);
  const data = {
    title: [
      { text: "Lorem", class: "font-calvino" },
      { text: "dolor sit amet", class: "font-calvino-italic" },
      { text: "adipiscing", class: "font-calvino" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
        class: "text-center",
      },
    ],

    textAlign: "md:text-center",
    spacing: "p-4",
  };
  const story = [
    {
      id: 1,
      title: "Story 1",
      link: "/story-1",
      image: "Story-1.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 2,
      title: "Story 2",
      link: "/story-2",
      image: "Story-2.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 3,
      title: "Story 3",
      link: "/story-3",
      image: "Story-3.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];

  return (
    <section className="success-stories">
      <div className="container-fixed">
        <Hero data={data} />
        <div className="relative flex justify-center mt-5 md:mt-10">
          <div className="absolute top-[-100%] left-0 w-full md:text-center">
            <ButtonPrimary link="/register" text="Register Now" className="" />
          </div>
        </div>
        <div className="story-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 lg:mt-0 sm:gap-5 lg:gap-20  pb-[100px]">
          <div >
            <Card data={story[0]} />
          </div>
          <div className="relative sm:translate-y-[70%]">
            <Card data={story[1]} />
          </div>
          <div >
            <Card data={story[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
