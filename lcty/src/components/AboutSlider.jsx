// AboutSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
  const sliderSettings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3, // default (large screen)
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,

          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-12 ">
      {/* Slider */}
      <Slider {...sliderSettings} className="">
        <div className="px-5">
          <img src="journey-1.jpg" alt="presentation" className=" w-full" />
        </div>
        <div className="px-5">
          <img src="journey-2.jpg" alt="building" className=" w-full" />
        </div>
        <div className="px-5">
          <img src="journey-3.jpg" alt="meditation" className=" w-full" />
        </div>
      </Slider>
    </section>
  );
};

export default AboutSlider;
