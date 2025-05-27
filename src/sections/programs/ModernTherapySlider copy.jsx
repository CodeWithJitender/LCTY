import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const sliderSettings = {
    centerMode: true,
    slidesToShow: 3, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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

  const sliderRef = useRef(null); // <-- create slider ref
  return (
    <div className="modern-therapy-slider py-10 overflow-hidden">
      <div className="slider-container">
        <Slider {...sliderSettings} className="">
          {sliderData.map((item, index) => (
            <div className="px-2" key={index}>
              <div className="slider-item primary-bg-2 flex flex-col md:flex-row  justify-between rounded-3xl p-5 h-[100%] ">
                <div className="slider-content md:w-[50%] md:pe-5">
                  <h3 className="h2 text-white leading-none mb-3">
                    {item.title.map((part, i) => (
                      <span key={i} className={part.class}>
                        {" "}
                        {part.text}{" "}
                      </span>
                    ))}
                  </h3>
                  {item.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`text-white ${i !== 0 ? "mt-3" : ""}`}
                    >
                      {p}
                    </p>
                  ))}
                  <Link to={item.button.link}>
                    <button className="body-t font-calvino-italic text-white mt-5">
                      <i className={item.button.iconClass}></i>{" "}
                      {item.button.text}
                    </button>
                  </Link>
                </div>
                <div className="slider-img md:w-[50%] rounded-3xl overflow-hidden mt-5 md:mt-0 h-">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-[100%] object-cover "
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ModernTherapySlider;
