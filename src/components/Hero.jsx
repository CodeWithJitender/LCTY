import React, { useRef } from "react";
import ButtomPrimary from "./ButtonPrimary";
import HeroSlider from "../sections/home/HeroSlider";
import SplitText from "gsap/src/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// Register plugins
gsap.registerPlugin(ScrollTrigger);

function Hero({data}) {
  // const data = {
  //   title: [
  //     { text: "Modern", class: "font-calvino" },
  //     { text: "therapy", class: "font-calvino-italic" },
  //   ],
  //   paragraphs: [
  //     {
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.",
  //       class: "text-center",
  //     },
  //   ],
  //   btn:{
  //     text: "Register Now",
  //     link: "/register",
  //   },
  //   slides: [
  //     {
  //       title: "Physical Therapy",
  //       image: "yoga-therapy.png",
  //       redirectUrl: "/yoga-therapy",
  //       bgColor: "primary-bg-2",
  //       btnBg: "secondary-bg-1",
  //       btnText: "text-white",
  //     },
  //     {
  //       title: "Occupational Therapy",
  //       image: "yoga-therapy.png",
  //       redirectUrl: "/yoga-therapy",
  //       bgColor: "primary-bg-2",
  //       btnBg: "secondary-bg-1",
  //       btnText: "text-white",
  //     },
  //     {
  //       title: "Yoga Therapy",
  //       image: "yoga-therapy.png",
  //       redirectUrl: "/yoga-therapy",
  //       bgColor: "primary-bg-2",
  //       btnBg: "secondary-bg-1",
  //       btnText: "text-white",
  //     },
  //     {
  //       title: "LCTY Tutor Therapy",
  //       image: "yoga-therapy.png",
  //       redirectUrl: "/yoga-therapy",
  //       bgColor: "primary-bg-2",
  //       btnBg: "secondary-bg-1",
  //       btnText: "text-white",
  //     },
  //     {
  //       title: "ABA",
  //       image: "yoga-therapy.png",
  //       redirectUrl: "/yoga-therapy",
  //       bgColor: "primary-bg-2",
  //       btnBg: "secondary-bg-1",
  //       btnText: "text-white",
  //     },
  //   ],
  //   textAlign:"text-center",
  // };
 const { title, paragraphs, btn, slides, textAlign, spacing } = data;
 const containerRef = useRef();
 const headingRef = useRef();

  useGSAP(() => {
    const splitText = new SplitText(headingRef.current, {
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
        scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top 20%",
        scroller:".main",
        // scrub: 1,
      },
    });
    return () => {
      splitText.revert();
    };
  }, []);
  return (
    <section className="hero" ref={containerRef}>
      {/* Hero Section */}
      <div className="container-xxl">
        <div className={`${spacing} m-auto flex flex-col  gap-5 md:gap-8 ${textAlign}`}>
          {console.log(title)}
          <h1 className={`h1 secondary-text-1 overflow-hidden ${textAlign}`} ref={headingRef}>
            {title.map((part, i) => (
              <span key={i} className={part.class}>
                {" "}
                {part.text}{" "}
              </span>
            ))}
          </h1>
          {paragraphs && paragraphs.map((p, i) => (
            <p key={i} className={`max-w-[1100px] font-archivo body-t m-auto mb-1 body-t-color overflow-hidden ${textAlign} ${p.class} `}>
              {p.text}
            </p>
          ))}
          {btn &&
            <ButtomPrimary text={btn.text} link={btn.link} />
          }
          {/* If slides are provided, render the HeroSlider */}
        </div>
      </div>
     <div data-aos="fade-up" data-delay="300">
       {slides && <HeroSlider slides={slides} />}
     </div>
    </section>
  );
}

export default Hero;
