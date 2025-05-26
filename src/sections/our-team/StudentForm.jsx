import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

function StudentForm() {
  return (
    <section className="">
        <div className="container-fixed">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
            {/* Image */}
            <div className="lg:order-2">
              <img src='Yoga3.png' alt="Kids Yoga" className=" w-full mb-5" />
            </div>
            {/* Text Content */}
            <div className="lg:order-1">
              <h2 className="h1 mb-4 secondary-text-1">
                <span className="font-calvino">Lorem</span>
                <span className="font-calvino-italic"> dolor sit </span>
              </h2>
              <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                fermentum commodo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In accumsan eros non fringilla faucibus. Sed
                scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis
                eu nisi non orci fermentum commodo.
              </p>
              <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                accumsan eros non fringilla faucibus. Sed scelerisque ultrices
                dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
                fermentum commodo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>

              <ButtonPrimary link="discover" text="Apply Now" />
            </div>
           
          </div>
        </div>
      </section>
  );
}

export default StudentForm;
