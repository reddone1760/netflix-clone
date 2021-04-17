import React from "react";
import "./Section.css";

function Section({ title, subtitle, img, id, reversed }) {
  return (
    <div className={reversed ? "reversed" : "row__landing"} key={id}>
      <div className="section__info">
        <h1 className="section__title">{title}</h1>
        <p className="section__subtitle">{subtitle}</p>
      </div>

      <img className="section__img" src={img} alt="section__img" />
    </div>
  );
}

export default Section;
