// import { ArrowUpRight } from "lucide-react";

const ProgramsSectionCopy = () => {
  const programs = [
    {
      number: "01.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
      highlight: true,
    },
    {
      number: "02.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
    },
    {
      number: "03.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
    },
    {
      number: "04.",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan eros non fringilla faucibus.",
    },
  ];

  const imageUrl = "Yoga3.png";

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-fixed">
        {/* Heading */}
        <h2 className="secondary-text-1 mb-10 max-w-[900px] h2 leading-tight ms-auto text-right">
          <span className="font-calvino"> Lorem ipsum </span>
          <span className="font-calvino-italic">
            {" "}
            dolor sit amet, consectetur
          </span>{" "}
          <span className="font-calvino">adipiscing elit.</span>
          <span className="font-calvino">
            {" "}
            In accumsan eros non fringilla faucibus. {" "}
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Right Text & Program Boxes */}
          <div>
            <p className="text-purple-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.
            </p>

            <div className="space-y-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="p-6 flex items-end gap-4 justify-between hover:bg-[#AE93FF] group transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <h3 className="secondary-text-1 h2 font-archivo group-hover:text-white transition-colors">
                      <span>{program.number} </span>
                    </h3>
                    <div>
                      <h3 className="secondary-text-1 h2 font-calvino group-hover:text-white transition-colors">
                        <span>{program.title}</span>
                      </h3>
                      <p className="body-t font-archivo mt-3 leading-5 body-t-color group-hover:text-white transition-colors">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <i className="far fa-arrow-up h2 rotate-45 body-t-color group-hover:text-white transition-colors"></i>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <img
            src={imageUrl}
            alt="Rehabilitation"
            className="rounded-lg w-full object-cover"
          />

          
        </div>
      </div>
    </section>
  );
};

export default ProgramsSectionCopy;
