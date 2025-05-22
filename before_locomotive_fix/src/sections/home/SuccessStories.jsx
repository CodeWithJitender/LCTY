import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import Card from "../../components/Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

function SuccessStories() {
  const containerRef = useRef();
  const headingRef = useRef();
    useGSAP(() => {
    const splitText = new SplitType(headingRef.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const tl = gsap.timeline();
    tl.from(splitText.lines, {
      duration: 1,
      y: 300,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });
    return () => {
      splitText.revert();
    };
  }, { scope: containerRef });

  const data = [
    {
      id: 1,
      title: "Story 1",
      link: "/story-1",
      image: "Story-1.png",
    },
    {
      id: 2,
      title: "Story 2",
      link: "/story-2",
      image: "Story-2.png",
    },
    {
      id: 3,
      title: "Story 3",
      link: "/story-3",
      image: "Story-3.png",
    },
  ];
  return (
    <section className="success-stories" ref={containerRef}>
      <div className="container-fixed">
        <h1 className="h1 secondary-text-1 text-center overflow-hidden" ref={headingRef}>
          <span className="font-calvino">Lorem</span>
          <span className="font-calvino-italic"> dolor sit amet </span>
          <span className="font-calvino">adipiscing</span>
        </h1>
        <p className="body-t-color btn-t max-w-[75%] mx-auto text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
          eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
          bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
          eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
          bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.{" "}
        </p>
        <div className="relative flex justify-center mt-10">
          <div className="absolute top-[-100%] left-0 w-full text-center">
            <ButtonPrimary link="/register" text="Register Now" className="" />
          </div>
        </div>
        <div className="story-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 lg:mt-0 sm:gap-5 lg:gap-20  pb-[100px]">
          <Card data={data[0]}/>
          <div className="relative sm:translate-y-[70%]"> 
            <Card data={data[1]}/>
          </div>
          <Card data={data[2]}/>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
