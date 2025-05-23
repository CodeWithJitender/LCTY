import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function LetsShow() {
  const containerRef = useRef();
  const headingRef = useRef();
  useGSAP(() => {
    const split = new SplitType(headingRef.current, {
      type: "lines",
    });

    gsap.from(split.lines, {
      opacity: 0,
      y: 400,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        // end: "top 80%",
        scroller: ".main",
        // scrub: true,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef.current, headingRef.current]);
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
