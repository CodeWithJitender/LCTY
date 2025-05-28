import React from 'react'
import ButtonPrimary from "../../components/ButtonPrimary";
import Heading from '../../components/Heading';
function LetsShow() {
  const data = {
    title: [
      { text: "Let’s", class: "font-calvino" },
      { text: "show you", class: "font-calvino-italic" },
      { text: "how to", class: "font-calvino" },
    ],
    textAlign: "text-center",
    spacing: "mb-5",
    fontSize: "h1",
    fontColor: "secondary-text-1",

  };
  return (
     <div className="h-[100vh] flex items-center justify-center" >
      <div className="container-fixed flex items-center  justify-center flex-col text-center lg:text-left lg:flex-row gap-10">
        <Heading data={data}  />
        <div className="relative ">
          <ButtonPrimary text="Register Now"/>
        </div>
      </div>
    </div>
  )
}

export default LetsShow
