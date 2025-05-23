import React from "react";

function MarqueeHome() {
  return (
    <div className="marquee-home w-full pb-[100px] md:py-[100px] overflow-hidden">
      <div className="band primary-bg-2 ">
        <div className="py-6">
          <div className="marquee whitespace-nowrap w-full">
            <span className="font-calvino-italic text-white h2 font-semibold uppercase">
              • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT
              AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR
              SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET •
              DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeHome;
