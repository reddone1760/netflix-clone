import React from "react";
import landingJson from "./InfosJson.js";
import Section from "./Section.js";

function Infos() {
  return (
    <div className="landing__infos">
      {landingJson.map((data) => (
        <Section
          title={data.title}
          subtitle={data.subtitle}
          img={data.img}
          id={data.id}
          reversed={data.reversed}
        />
      ))}
    </div>
  );
}

export default Infos;
