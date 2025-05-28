import ButtonPrimary from "../../components/ButtonPrimary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageUrl = "Yoga3.png";

const Culture = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640, // < 640px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <section className="bg-white ">
      <h2 className="h1 mb-4 secondary-text-1 px-5 text-center block lg:hidden">
        <span className="font-calvino">Why</span>
        <span className="font-calvino-italic"> you </span>
        <span className="font-calvino">are here!</span>
      </h2>
      <div className="block lg:hidden mb-5 w-full overflow-x-hidden">
        <Slider {...settings}>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
          <div className="px-1">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
        </Slider>
      </div>
      <div className="container-fixed ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div className="sticky top-40">
            <h2 className="h1 mb-4 secondary-text-1 hidden lg:block">
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

            {/* <ul className="space-y-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </li>
              ))}
            </ul> */}

            <ButtonPrimary link="discover" text="Register Now" />
          </div>
          {/* Image */}
          <div className="hidden lg:block">
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
            <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
