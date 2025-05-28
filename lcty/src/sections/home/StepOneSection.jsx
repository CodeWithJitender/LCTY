import React from "react";
// import LoginImage from "Step-1.png"; // adjust this path based on your project
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const StepOneSection = () => {
  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h2");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  });
  return (
    <section className="w-full primary-bg-2 ">
      <div className="">
        <div className="gallery flex flex-col-reverse lg:flex-row gap-10 ">
          {/* Left Column */}
          <div className="left pb-7 lg:pb-0 px-5 lg:px-[80px] lg:w-[50%]">
            <div className="desktopContent">
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img src="Step-1.png" alt="" className="w-full block lg:hidden" />

                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">01.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                  <span className="font-calvino-italic">
                    In accumsan eros non fringilla faucibus.
                  </span>{" "}
                  <span className="font-calvino">Sed scelerisque ultrice </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>

                {/* Link */}
                <a
                  href="#form"
                  className="inline-block mt-4 text-white font-calvino-italic hover:underline"
                >
                  → Take me to the form
                </a>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img src="Step-1.png" alt="" className="w-full block lg:hidden" />
              
                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">02.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                  <span className="font-calvino-italic">
                    In accumsan eros non fringilla faucibus.
                  </span>{" "}
                  <span className="font-calvino">Sed scelerisque ultrice </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>

                {/* Link */}
                <a
                  href="#form"
                  className="inline-block mt-4 text-white font-calvino-italic hover:underline"
                >
                  → Take me to the form
                </a>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img src="Step-1.png" alt="" className="w-full block lg:hidden" />
               
                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">03.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                  <span className="font-calvino-italic">
                    In accumsan eros non fringilla faucibus.
                  </span>{" "}
                  <span className="font-calvino">Sed scelerisque ultrice </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>

                {/* Link */}
                <a
                  href="#form"
                  className="inline-block mt-4 text-white font-calvino-italic hover:underline"
                >
                  → Take me to the form
                </a>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img src="Step-1.png" alt="" className="w-full block lg:hidden" />
               
                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">04.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                  <span className="font-calvino-italic">
                    In accumsan eros non fringilla faucibus.
                  </span>{" "}
                  <span className="font-calvino">Sed scelerisque ultrice </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>

                {/* Link */}
                <a
                  href="#form"
                  className="inline-block mt-4 text-white font-calvino-italic hover:underline"
                >
                  → Take me to the form
                </a>
              </div>
              <div className="desktopContentSection text-white  lg:h-screen flex flex-col justify-center">
                <img src="Step-1.png" alt="" className="w-full block lg:hidden" />
               
                {/* Top Row with icon and step number */}
                <div className="flex items-center justify-between border-b border-white pb-2">
                  <div className="text-2xl">
                    <img src="user.png" className="max-w-10" alt="" />
                  </div>
                  <span className="text-lg font-bold">05.</span>
                </div>

                {/* Heading */}
                <h2 className="h2 leading-[100%] mt-10">
                  <span className="font-calvino">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </span>
                  <span className="font-calvino-italic">
                    In accumsan eros non fringilla faucibus.
                  </span>{" "}
                  <span className="font-calvino">Sed scelerisque ultrice </span>
                </h2>

                {/* Description */}
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>
                <p className="font-archivo leading-[120%] text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                  dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                  fermentum commodo.
                </p>

                {/* Link */}
                <a
                  href="#form"
                  className="inline-block mt-4 text-white font-calvino-italic hover:underline"
                >
                  → Take me to the form
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="right  flex-col justify-center items-center lg:h-screen bg-[#FFAFFF]  lg:w-[50%] hidden lg:flex ">
            <div className="desktopPhotos relative overflow-hidden  w-[40vw] h-[40vw]">
              <div className="desktopPhoto absolute">
                <img src="Step-1.png" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="Step-1.png" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="Step-1.png" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="Step-1.png" alt="" className="w-full" />
              </div>
              <div className="desktopPhoto absolute">
                <img src="Step-1.png" alt="" className="w-full" />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOneSection;
