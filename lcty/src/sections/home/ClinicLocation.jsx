import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

function ClinicLocation() {
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
  const data = {
    title: [
      { text: "Clinics", class: "font-calvino" },
      { text: "Locations", class: "font-calvino-italic" },
    ],
    textAlign: "text-start",
    spacing: "p-4",
    fontSize: "h1",
    fontColor: "secondary-text-1",
  };
  return (
    <section className="clinic-location">
      <div className="container-fixed">
        <Heading data={data} />

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

export default ClinicLocation;
