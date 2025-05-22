import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

function LetsShow() {
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
  return (
    <div className="bg-white pb-[50px] h-[100vh] flex items-center justify-center" ref={containerRef}>
      <div className="container-fixed flex items-center gap-5 justify-center flex-col text-center lg:text-left lg:flex-row">
        <h1 className="secondary-text-1 h1 mb-4 overflow-hidden" ref={headingRef}>
          <span className="font-calvino">Let’s</span>
          <span className="font-calvino-italic"> show you</span>
          <span className="font-calvino"> how to</span>
        </h1>
        <ButtonPrimary link="discover" text="Register Now" />
      </div>
    </div>
  );
}

export default LetsShow;
