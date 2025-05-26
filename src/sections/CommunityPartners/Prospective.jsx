import React from 'react'
import HeroSlider from '../home/HeroSlider'
import ButtomPrimary from '../../components/ButtonPrimary'

function Prospective() {
  return (
    <section className="pb-20">
      <div className="container-xxl">
        <div className="p-4 m-auto flex flex-col items-center justify-center gap-5 md:gap-8">
          <h1 className="h1 secondary-text-1 text-center overflow-hidden">
            <span className="font-calvino">Little Champs </span>
            <span className="font-calvino-italic">therapy & yoga</span>
          </h1>
          <p className="max-w-[1100px] font-archivo body-t text-center  body-t-color overflow-hidden" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
            bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.{" "}
          </p>
          <ButtomPrimary text="Register  Now" />
        </div>
      </div>
      <HeroSlider />
    </section>
  )
}

export default Prospective
