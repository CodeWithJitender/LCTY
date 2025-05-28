import React from "react";
import ButtomPrimary from "./ButtonPrimary";
import HeroSlider from "./HeroSlider";


function Hero({ data }) {
  const { title, paragraphs, btn, slides, textAlign, spacing } = data;

  return  <section className="hero" >
      {/* Hero Section */}
      <div className="container-xxl">
        <div className={`${spacing} m-auto flex flex-col  gap-5 md:gap-8 ${textAlign}`}>
          {/* {console.log(title)} */}
          <h1 className={`h1 secondary-text-1 overflow-hidden ${textAlign}`}>
            {title.map((part, i) => (
              <span key={i} className={part.class}>
                {" "}
                {part.text}{" "}
              </span>
            ))}
          </h1>
          {paragraphs && paragraphs.map((p, i) => (
            <p key={i} className={`max-w-[1100px] font-archivo body-t m-auto mb-1 body-t-color overflow-hidden ${textAlign} ${p.class} `}>
              {p.text}
            </p>
          ))}
          {btn &&
            <ButtomPrimary text={btn.text} link={btn.link} />
          }
          {/* If slides are provided, render the HeroSlider */}
        </div>
      </div>
     <div data-aos="fade-up" data-delay="300">
       {slides && <HeroSlider slides={slides} />}
     </div>
    </section>;
}

export default Hero;
