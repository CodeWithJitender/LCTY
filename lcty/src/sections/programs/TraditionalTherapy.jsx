import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

function TraditionalTherapy() {
  const data = {
    title: [
      { text: "Traditional", class: "font-calvino" },
      { text: "therapy", class: "font-calvino-italic" },
    ],
   textAlign:"text-center",
   fontSize:"h1",
  };
  
  const testimonials = [
    {
      image: "testmonial-1.png",
      alt: "presentation",
     title: [
        { text: "Lorem ipsum", class: "font-calvino" },
        { text: " dolor sit amet, consectetur", class: "font-calvino-italic" },
        { text: "adipiscing elit. In accumsan eros.", class: "font-calvino" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
    },
    {
      image: "testmonial-2.png",
      alt: "building",
      title: [
        { text: "Lorem ipsum", class: "font-calvino" },
        { text: " dolor sit amet, consectetur", class: "font-calvino-italic" },
        { text: "adipiscing elit. In accumsan eros.", class: "font-calvino" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
    },
    {
      image: "testmonial-3.png",
      alt: "meditation",
     title: [
        { text: "Lorem ipsum", class: "font-calvino" },
        { text: " dolor sit amet, consectetur", class: "font-calvino-italic" },
        { text: "adipiscing elit. In accumsan eros.", class: "font-calvino" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },

    },

  ];
  return (
    <div className="traditional-therapy">
      <div className="container-fixed">
        <div className="max-w-7xl m-auto text-center secondary-text-1 ">
          <Heading data={data}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. </p>
        </div>

        <div className="testimonial-container max-w-7xl m-auto mt-10">
          {
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-item bg-center bg-cover rounded-3xl p-6 md:p-10 mb-10 ${
                  index === 0 ? "bg-[url('/testimonial-bg.png')]" : ""
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-[150px] m-auto"
                />
                <div className="testimonial-text text-center mt-5">
                  <h2 className="h2 text-center text-white max-w-4xl m-auto">
                    {testimonial.title.map((text, i) => (
                      <span key={i} className={text.class}>
                        {" "} {text.text} {" "}
                      </span>
                    ))}
                  </h2>
                  <p className="text-white mt-4 body-t">{testimonial.text}</p>
                   <Link to={testimonial.button.link}>
                    <button className="body-t font-calvino-italic text-white mt-5">
                      <i className={testimonial.button.iconClass}></i>{" "}
                      {testimonial.button.text}
                    </button>
                  </Link>
                </div>
              </div>
            ))
          }
            {/* <div className="testimonial-item bg-[url('/testimonial-bg.png')]">
                <img src="testmonial-1.png" alt="presentation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="building" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="meditation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default TraditionalTherapy;
