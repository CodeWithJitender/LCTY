import React from "react";

const FounderMessage = () => {
  return (
    <section className="text-white text-center">
      <div className="primary-bg-2 pb-[50px]">
        <div className="container-fixed">
          <div className=" max-w-6xl mx-auto flex items-stretch">
            {/* Quote Text */}
            <h1 className="h1  mb-4">
              <span className="h1 text-white/50">
                <i className="fas fa-quote-left  text-white/50 inline-block mb-4"></i>{" "}
              </span>
              <span className="font-calvino">Lorem ipsum</span>{" "}
              <span className="font-calvino-italic">
                dolor sit amet, consectetur
              </span>
              <span className="font-calvino">adipiscing elit.</span> In accumsan
              eros non fringilla faucibus.
              <span>
                <i className="fas fa-quote-right  text-white/50 ms-2"></i>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Circle Indicators */}
      <div className="container-xxl pb-[50px]">
        <div className="flex justify-evenly  flex-wrap relative translate-y-[-50%] ">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="w-40 h-40 bg-[#FFAAFF] rounded-full"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
