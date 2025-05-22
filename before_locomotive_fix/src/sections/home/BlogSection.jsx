import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { Link } from "react-router-dom";
const blogs = [
  {
    title: "Lorem",
    subtitle: "dolor sit adipiscing",
    author: "Ayush Chaturvedi",
    date: "14 March, 2025",
    image: "blog.png", // Replace with your image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. In accumsan eros non fringilla faucibus.",
  },
  {
    title: "Lorem",
    subtitle: "dolor sit adipiscing",
    author: "Ayush Chaturvedi",
    date: "14 March, 2025",
    image: "blog.png", // Replace with your image
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. In accumsan eros non fringilla faucibus.",
  },
];

export default function BlogSection() {
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
    <section className="" ref={containerRef}>
      <div className="container-fixed">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-400 font-calvino mb-10 leading-tight overflow-hidden" ref={headingRef}>
              Lorem <span className="italic font-normal">dolor sit</span>{" "}
              <span className="font-bold">amet adipiscing</span>
            </h2>
          </div>

          <div className="lg:w-[60%]">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="">
                {blogs.map((blog, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 primary-bg-2 text-white overflow-hidden shadow-lg mt-4"
              >
                <div className="p-5 pb-0 md:pb-5 md:pe-0">
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="h2  mb-2">
                        <span className="font-calvino">
                      {blog.title}{" "}
                        </span>
                      <span className="font-calvino-italic">
                        {blog.subtitle}
                      </span>
                    </h2>
                    <div className=" font-archivo border-y border-white mt-2 pt-2 pb-2 mb-4 flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base gap-1">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                    <p className="font-archivo btn-t mb-4 text-white">
                      {blog.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className=" text-white font-calvino-italic flex items-center gap-1 mt-auto "
                  >
                    Read more <i class="fal fa-arrow-right -rotate-45"></i>
                  </a>
                </div>
              </div>
            ))}
              </div>
              <div className="flex items-end justify-center ">
                <Link to="/blog">
                <div className="w-14 h-14 secondary-bg-1 flex items-center justify-center rounded-full text-white body-t hover:bg-[#fab4fa] transition-all">
                <i class="fal fa-arrow-up rotate-45 "></i>
                </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
