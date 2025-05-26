import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
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
        start: "top 50%",
        end: "top 10%",
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
    <div className="contact-section" ref={containerRef}>
      <div className="container-fixed">
        <h1 className="h1 secondary-text-1 md:text-center overflow-hidden" ref={headingRef}>
          <span className="font-calvino">Lorem</span>
          <span className="font-calvino-italic"> dolor sit amet </span>
          <span className="font-calvino">adipiscing</span>
        </h1>
        <p className="max-w-[1200px] m-auto md:text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. </p>
        <div className="flex md:justify-center mt-10">
            <ButtonPrimary link="/contact-us" text="Contact Us"/>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
