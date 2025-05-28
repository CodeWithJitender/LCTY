import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModernCard from "../../components/ModernCard";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full secondary-bg-1 text-white flex items-center justify-center  absolute bottom-[-100px] left-[45%]"
  >
    <i className="fas fa-arrow-left"></i>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full secondary-bg-1 text-white flex items-center justify-center absolute bottom-[-100px] left-[55%]"
  >
    <i className="fas fa-arrow-right"></i>
  </button>
);

function ModernTherapySlider() {
  // data/sliderData.js
  const sliderData = [
    {
      title: [
        { text: "Lorem", class: "font-calvino" },
        { text: " dolor sit", class: "font-calvino-italic" },
        { text: "adipiscing", class: "font-calvino" },
      ],
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "In accumsan eros non fringilla faucibus.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Lorem", class: "font-calvino" },
        { text: " dolor sit", class: "font-calvino-italic" },
        { text: "adipiscing", class: "font-calvino" },
      ],
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "In accumsan eros non fringilla faucibus.",
      ],
      button: {
        text: "Explore wellness",
        iconClass: "fal fa-arrow-right",
        link: "/programs/healthy-lifestyle",
      },
      image: {
        src: "modern-1.png",
        alt: "Wellness",
      },
    },
    {
      title: [
        { text: "Lorem", class: "font-calvino" },
        { text: " dolor sit", class: "font-calvino-italic" },
        { text: "adipiscing", class: "font-calvino" },
      ],
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "In accumsan eros non fringilla faucibus.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
  ];
  const settings = {
    centerMode: true,
    centerPadding: "60px", // You can adjust this (e.g., '0px', '20%', etc.)
    slidesToShow: 3,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    arrows: true,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  // const sliderRef = useRef(null); // <-- create slider ref
  return (
    <div className="modern-therapy-slider py-10 overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <ModernCard key={index} data={item} className="w-full"/>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ModernTherapySlider;
