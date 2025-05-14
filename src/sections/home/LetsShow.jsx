import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

function LetsShow() {
  return (
    <div className="bg-white pb-[50px] h-[100vh] flex items-center justify-center">
      <div className="container-fixed flex items-center gap-5 justify-center">
        <h1 className="secondary-text-1 h1 mb-4">
          <span className="font-calvino">Let’s</span>
          <span className="font-calvino-italic"> show you</span>
          <span className="font-calvino"> how to</span>
        </h1>
        <ButtonPrimary link="discover" text="Register Now" />
      </div>
    </div>
  );
}

export default LetsShow;
