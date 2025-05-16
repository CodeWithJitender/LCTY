import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
  return (
    <section className="">
      <div className="container-fixed">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-400 font-calvino mb-10 leading-tight">
              Lorem <span className="italic font-normal">dolor sit</span>{" "}
              <span className="font-bold">amet adipiscing</span>
            </h2>
          </div>

          <div className="space-y-12 lg:w-[60%]">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 primary-bg-2 text-white overflow-hidden shadow-lg"
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
        </div>
      </div>
    </section>
  );
}
