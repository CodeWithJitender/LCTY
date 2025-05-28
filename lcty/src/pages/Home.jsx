import React from 'react'
import Hero from '../components/Hero';
import WhyYouAreHereSection from '../sections/home/WhyYouAreHereSection';
import WhoWeAreSection from '../sections/home/WhoWeAreSection';
import ProgramsSection from '../sections/home/ProgramsSection';
import ProgramsSectionCopy from '../sections/home/ProgramsSectionCopy';
import LetsShow from '../sections/home/LetsShow';
import StepOneSection from '../sections/home/StepOneSection';
import ResultSection from '../sections/home/ResultSection';
import SuccessStories from '../sections/home/SuccessStories';
import ClinicLocation from '../sections/home/ClinicLocation';
import MarqueeHome from '../sections/home/MarqueeHome';
import BlogSection from '../sections/home/BlogSection';

function Home() {
   const data = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
        class: "text-center",
      },
    ],
    btn:{
      text: "Register Now",
      link: "/apply",
    },
    slides: [
      {
        title: "Physical Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Occupational Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Yoga Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "LCTY Tutor Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "ABA",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
    ],
    textAlign:"text-center",
    spacing:"p-4"
  };
  const data2 = {
    title: [
      { text: "Little Champs", class: "font-calvino" },
      { text: "therapy & yoga", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo. ",
        class: "text-center",
      },
    ],
    btn:{
      text: "Register Now",
      link: "/apply",
    },
    textAlign:"text-center",
    spacing:"p-4"
  };
  return (
    <>
     <Hero data={data}/> 
     <WhyYouAreHereSection data={data2} />
     <WhoWeAreSection />
     <ProgramsSection />
     <ProgramsSectionCopy />
     <LetsShow />
     <StepOneSection />
     <ResultSection />
     <SuccessStories />
     <ClinicLocation />
     <MarqueeHome />
     <Hero data={data2} />
     <BlogSection />
    </>
  )
}

export default Home
