import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

function ContactSection() {
  return (
    <div className="contact-section ">
      <div className="container-fixed">
        <h1 className="h1 secondary-text-1 text-center">
          <span className="font-calvino">Lorem</span>
          <span className="font-calvino-italic"> dolor sit amet </span>
          <span className="font-calvino">adipiscing</span>
        </h1>
        <p className="max-w-[1200px] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. </p>
        <div className="flex justify-center mt-10">
            <ButtonPrimary link="/contact-us" text="Contact Us"/>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
