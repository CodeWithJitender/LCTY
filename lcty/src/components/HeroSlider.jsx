// components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

function HeroSlider({slides}) {
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


  return (
    <div className="hero-slider mt-5 w-full overflow-hidden">
      <Slider {...settings}>
        {console.log(slides)}
        {slides.map((src, index) => (
          <Card key={index} data={src} />
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
