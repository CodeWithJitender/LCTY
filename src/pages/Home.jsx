import React from "react";
import WhoWeAreSection from "../sections/home/WhoWeAreSection";
import WhyYouAreHereSection from "../sections/home/WhyYouAreHereSection";
import ProgramsSection from "../sections/home/ProgramsSection";
import ProgramsSectionCopy from "../sections/home/ProgramsSectionCopy";
import LetsShow from "../sections/home/LetsShow";
import Hero from "../sections/home/Hero";
import StepOneSection from "../sections/home/StepOneSection";
import ResultSection from "../sections/home/ResultSection";
import SuccessStories from "../sections/home/SuccessStories";
import MarqueeHome from "../sections/home/MarqueeHome";
import ClinicLocation from "../sections/home/ClinicLocation";

function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyYouAreHereSection />
      <WhoWeAreSection />
      <ProgramsSection />
      <ProgramsSectionCopy />
      <LetsShow />
      <StepOneSection />
      <ResultSection />
      <SuccessStories />
      <ClinicLocation />
      {/* <MarqueeHome /> */}
    </div>
  );
}

export default Home;
