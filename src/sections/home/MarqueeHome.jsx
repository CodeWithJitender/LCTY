import React from "react";

function MarqueeHome() {
  return (
    <div className="marquee-home w-full py-[100px] overflow-hidden">
      <div className="band primary-bg-2">
      <div className="marquee whitespace-nowrap w-full">
        <span className="font-calvino-italic text-white nav-t font-semibold uppercase">
          • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET •
          DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET •
          DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET • DOLOR SIT AMET •
          DOLOR SIT AMET • DOLOR SIT AMET
        </span>
      </div>
    </div>
    </div>
  );
}

export default MarqueeHome;
