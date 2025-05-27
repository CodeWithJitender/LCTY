import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ResultSection = () => {
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
    <section className="w-full  py-16 bg-white overflow-hidden" ref={containerRef}>
      <div className="container-fixed">
        <div className="max-w-[1400px]  space-y-10">
          {/* Top Text */}
          <div className=" md:text-left max-w-[1000px]">
            <h2 className="h2 secondary-text-1 overflow-hidden" ref={headingRef} >
              <span className="font-calvino">Lorem ipsum</span>{" "}
              <span className="font-calvino-italic">
                dolor sit amet, consectetur
              </span>{" "}
              <span className="font-calvino">
                {" "}
                adipiscing elit. In accumsan eros non fringilla faucibus.
              </span>
            </h2>
 
            <p className="body-t body-t-color mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p className="body-t body-t-color mt-2">
              Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
              Duis eu nisi non orci fermentum commodo.
            </p>
          </div>

          {/* Chart + Stat Box */}
          <div className="relative">
            <img src="result.jpg" className="w-full" alt="" />

            {/* Stat Box */}
            <div className="md:absolute md:right-[-5%] md:top-[-20%] bg-[#8A63FF80] backdrop-blur-lg text-white p-6 md:rounded-2xl md:w-80 shadow-lg z-10 md:text-center w-full mt-4 md:mt-0">
              <h3 className="h2 font-calvino mb-2">Lorem ipsum dolor</h3>
              <p className="font-calvino-italic body-t mb-2" >Lorem ipsum</p>
              <div className="text-5xl font-archivo font-bold mt-5 mb-3" style={{fontSize:"clamp(30px, 5vw, 55px)"}}>
                6546
              </div>
              <p className="font-archivo mb-3 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className=" font-archivo  text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            {/* Chart Placeholder */}
            {/* <div className="bg-gradient-to-tr from-purple-300 to-pink-400 rounded-lg overflow-hidden">
            <div className="relative h-64 sm:h-72 md:h-80 flex items-end justify-between px-6 pb-6 text-white text-sm font-light">
              <div className="absolute left-4 top-4 rotate-[-90deg] origin-left">
                Lorem ipsum
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex justify-between text-xs">
                <span>2019</span>
                <span className="bg-white text-pink-500 px-3 py-1 rounded-full font-bold">2021</span>
                <span>2023</span>
                <span>2025</span>
                <span>2027</span>
              </div>

              <div className="absolute left-[25%] bottom-[30%] flex flex-col items-center text-white">
                <div className="w-4 h-4 border-2 border-white rounded-full bg-transparent"></div>
                <span className="mt-1">Lorem ipsum</span>
              </div>

              <i className="fas fa-arrow-right absolute right-4 bottom-4 text-white text-sm"></i>
            </div>
          </div> */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
