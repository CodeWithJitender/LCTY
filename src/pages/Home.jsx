import React from "react";
import WhoWeAreSection from "../sections/home/WhoWeAreSection";
import WhyYouAreHereSection from "../sections/home/WhyYouAreHereSection";
import ProgramsSection from "../sections/home/ProgramsSection";
import ProgramsSectionCopy from "../sections/home/ProgramsSectionCopy";
import LetsShow from "../sections/home/LetsShow";
import Hero from "../sections/home/Hero";

function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyYouAreHereSection />
      <WhoWeAreSection />
      <ProgramsSection />
      <ProgramsSectionCopy />
      <LetsShow />
    </div>
  );
}

export default Home;
