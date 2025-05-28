import React from "react";

function Number({ number }) {
  return (
    <div className="journey-circle w-full flex justify-center items-center relative z-10">
      <div className="outer-circle w-[140px] h-[140px] rounded-full flex justify-center items-center">
        <div className="inner-circle w-[100px] h-[100px] rounded-full flex justify-center items-center">
          <div className="number h3 font-archivo font-bold text-white">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
