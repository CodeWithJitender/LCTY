import React from "react";
import ButtomPrimary from "../../components/ButtonPrimary";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <div className="hero">
      <div className="container-xxl">
        <div className="p-4 m-auto flex flex-col items-center justify-center gap-5 md:gap-8">
          <h1 className="h1 secondary-text-1 text-center">
            <span className="font-calvino">Little Champs </span>
            <span className="font-calvino-italic">therapy & yoga</span>
          </h1>
          <p className="max-w-[1100px] font-archivo body-t text-center  body-t-color ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
            bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.{" "}
          </p>
          <ButtomPrimary text="Register  Now" />
        </div>
      </div>
      <HeroSlider />
    </div>
  );
}

export default Hero;
