import ButtonPrimary from "../../components/ButtonPrimary";

const imageUrl = "Yoga3.png";

const WhyYouAreHereSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-fixed">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div>
          <img
            src={imageUrl}
            alt="Kids Yoga"
            className=" w-full mb-5"
          />
          <img
            src={imageUrl}
            alt="Kids Yoga"
            className=" w-full mb-5"
          />
          <img
            src={imageUrl}
            alt="Kids Yoga"
            className=" w-full mb-5"
          />
        </div>

        {/* Text Content */}
        <div className="sticky top-5">
          <h2 className="h1 mb-4 secondary-text-1">
            <span className="font-calvino">Why</span>
            <span className="font-calvino-italic"> you </span>
            <span className="font-calvino">are here!</span>
          </h2>

          <p className="body-t mb-6 body-t-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            accumsan erosLorem ipsum dolor sit amet, consectetur adipiscing
            elit. In accumsan eros
          </p>

          <ul className="space-y-3 mb-8">
            {[...Array(5)].map((_, i) => (
              <li
                key={i}
                className="flex items-start space-x-3 body-t body-t-color"
              >
                <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              </li>
            ))}
          </ul>

          <ButtonPrimary link='discover' text="Register Now"/>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhyYouAreHereSection;
