import React from "react";

function MainHeading({ title, paragraphs }) {
  return (
    <div className="main-heading">
      <h1 className="h1 secondary-text-1 leading-none mb-3">
        {title.map((part, i) => (
          <span key={i} className={part.class}>
            {" "}
            {part.text}{" "}
          </span>
        ))}
      </h1>
      {paragraphs.map((p, i) => (
        <p key={i} className={`${p.class} ${i !== 0 ? "mt-3" : ""}`}>
          {p.text }
        </p>
      ))}
    </div>
  );
}

export default MainHeading;
