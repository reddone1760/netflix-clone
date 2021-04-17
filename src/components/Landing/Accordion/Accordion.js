import React from "react";
import accordionJson from "./AccordionJson.js";
import AccordionSection from "./AccordionSection.js";
import "./Accordion.css";
import Start from "../Start/Start.js";

function Accordion() {
  return (
    <div className="accordion">
      <h1 className="accordion__header">Frequently Asked Questions</h1>
      {accordionJson.map((data) => (
        <AccordionSection
          header={data.header}
          id={data.id}
          bodyOne={data.body1}
          bodyTwo={data.body2}
        />
      ))}
      <h2 className="header">
      Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <Start />
    </div>
  );
}

export default Accordion;
