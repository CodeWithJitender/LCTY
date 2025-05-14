import React from "react";
// import LoginImage from "Step-1.png"; // adjust this path based on your project

const StepOneSection = () => {
  return (
    <section className="w-full primary-bg-2">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="px-[80px]">
            <div className="text-white space-y-6 h-[100vh] flex flex-col justify-center ">
              {/* Top Row with icon and step number */}
              <div className="flex items-center justify-between border-b border-white pb-2">
                <div className="text-2xl">
                  <img src="user.png" className="max-w-10" alt="" />
                </div>
                <span className="text-lg font-bold">01.</span>
              </div>

              {/* Heading */}
              <h2 className="h2 leading-[100%]">
                <span className="font-calvino">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
                <span className="font-calvino-italic">
                  In accumsan eros non fringilla faucibus.
                </span>{" "}
                <span className="font-calvino">Sed scelerisque ultrice </span>
              </h2>

              {/* Description */}
              <p className="font-archivo leading-[120%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                fermentum commodo.
              </p>
              <p className="font-archivo leading-[120%]">
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

          {/* Right Column (Image) */}
          <div className="flex justify-center h-[100vh]">
            <img
              src="Step-1.png"
              alt="Login Illustration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOneSection;
