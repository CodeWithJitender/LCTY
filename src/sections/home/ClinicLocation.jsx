import React from "react";
import Card from "../../components/Card"; // Adjust path as necessary
import ButtonPrimary from "../../components/ButtonPrimary";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import Hero from "../../components/Hero";
gsap.registerPlugin(ScrollTrigger);

// const clinics  = [
//     {
//       title: "Story 1",
//       image: "Story-1.png",
//       redirectUrl: "/story-1",
//     },
//     {
//       title: "Story 2",
//       image: "Story-2.png",
//       redirectUrl: "/story-2",
//     },
//     {
//       title: "Story 3",
//       image: "Story-3.png",
//       redirectUrl: "/story-3",
//     },
//   ];

export default function ClinicLocation() {
  const clinics = [
    {
      title: "Clinic 1",
      image: "clinic-1.jpg",
      redirectUrl: "/clinic-1",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Clinic 2",
      image: "clinic-2.jpg",
      redirectUrl: "/clinic-2",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Clinic 3",
      image: "clinic-3.jpg",
      redirectUrl: "/clinic-3",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      title: "Clinic 4",
      image: "clinic-4.jpg",
      redirectUrl: "/clinic-4",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];
  const heading = {
    title: [
      { text: "Clinic", class: "font-calvino" },
      { text: "location", class: "font-calvino-italic" },
    ],

    textAlign:"text-start",
  };

  return (
    <section className="clinic-location">
      <div className="container-fixed">
       <Hero data={heading} />

        <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:max-w-[600px] mx-auto">
          <div className="xl:translate-y-[35%]">
            <Card data={clinics[0]} />
          </div>
          <div className="xl:translate-y-[-35%]">
            <Card data={clinics[1]} />
          </div>
          <div className="xl:translate-y-[35%]">
            <Card data={clinics[2]} />
          </div>
          <div className="xl:translate-y-[-35%]">
            <Card data={clinics[3]} />
          </div>
        </div>

        <div className="mt-10 xl:max-w-[600px] ms-auto text-center md:text-start px-2 md:p-auto">
          <p className="body-t-color btn-t mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
            bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.
          </p>
          <ButtonPrimary link="/hello" text="Register Now" />
        </div>
      </div>
    </section>
  );
}
