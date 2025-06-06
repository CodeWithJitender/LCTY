import ButtonPrimary from "../../components/ButtonPrimary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import Hero from "../../components/Hero";

const imageUrl = "Yoga3.png";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const WhyYouAreHereSection = () => {
 const containerRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  

  useGSAP(() => {
    // Split the heading into lines
    const split = new SplitType(headingRef.current, {
      type: "lines",
      linesClass: "lineChildren block",
    });

    // Animate heading lines
    gsap.from(split.lines, {
      y: 400,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top 20%",
        scroller:".main",
        // scrub: 1,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef.current,headingRef.current,contentRef.current]);

  const settings = {
    centerMode: true,
    centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640, // < 640px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
    const data = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
        class: "text-center",
      },
    ],
    textAlign:"text-start",
  };
  return (
    <section ref={containerRef} className="bg-white pt-16 md:py-12"  >
      <h2 className="h1 secondary-text-1 px-5 text-center block lg:hidden overflow-hidden mb-5"  ref={headingRef}>
        <span className="font-calvino">Why</span>
        <span className="font-calvino-italic"> you </span>
        <span className="font-calvino">are here!</span>
      </h2>
      <div className="block lg:hidden mb-5 w-full overflow-x-hidden">
        <Slider {...settings}>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full" />
          </div>
        </Slider>
      </div>
      <div className="container-fixed relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="hidden lg:block">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>

          {/* Text Content */}
          <div className="why-text-content sticky top-40" >
            <Hero data={data}  />
            <ul className="space-y-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </li>
              ))}
            </ul>

            <ButtonPrimary link="discover" text="Register Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouAreHereSection;
