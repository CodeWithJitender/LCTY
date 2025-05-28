import React from 'react'
import { Link } from 'react-router-dom'

function ModernCard({ data }) {
  console.log(data)
  const {title, paragraphs, button, image} = data
  return (
    <div>
      <div className="px-2" >
              <div className="slider-item primary-bg-2 flex flex-col md:flex-row  justify-between rounded-3xl p-5 h-[100%] ">
                <div className="slider-content md:w-[50%] md:pe-5">
                  <h3 className="h2 text-white leading-none mb-3">
                    {title.map((part, i) => (
                      <span key={i} className={part.class}>
                        {" "}
                        {part.text}{" "}
                      </span>
                    ))}
                  </h3>
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`text-white ${i !== 0 ? "mt-3" : ""}`}
                    >
                      {p}
                    </p>
                  ))}
                  <Link to={button.link}>
                    <button className="body-t font-calvino-italic text-white mt-5">
                      <i className={button.iconClass}></i>{" "}
                      {button.text}
                    </button>
                  </Link>
                </div>
                <div className="slider-img md:w-[50%] rounded-3xl overflow-hidden mt-5 md:mt-0 h-">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[100%] object-cover "
                  />
                </div>
              </div>
            </div>
    </div>
  )
}

export default ModernCard
