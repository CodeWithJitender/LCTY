import ButtonSecondary from "../../components/ButtonSecondary";

const backgroundImage = "yoga-therapy-2.png";

const WhoWeAreSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container-fixed">
        {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10  grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        
        {/* Left side: Heading */}
        <div className="flex items-center justify-center md:justify-start text-center md:text-left">
          <h1 className="h1">
            <span className="font-calvino">Who</span> <span className="font-calvino-italic">we</span> <span className="font-calvino">are</span>
          </h1>
        </div>

        {/* Right side: Text + Button */}
        <div className="flex flex-col justify-center space-y-6   font-medium leading-tight">
          <p className="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non
            fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
            Duis eu nisi non orci fermentum commodo.
          </p>
          <p className="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non
            fringilla faucibus. Sed scelerisque ultrices dui, vitae bibendum lorem bibendum ac.
            Duis eu nisi non orci fermentum commodo.
          </p>
          <ButtonSecondary text="Discover" link="discover" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
