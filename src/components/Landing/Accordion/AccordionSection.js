import React, { useState } from "react";
import "./AccordionSection.css";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

function AccordionSection({ id, header, bodyOne, bodyTwo }) {
  const [showBody, setShowBody] = useState(false);

  return (
    <div key={id} className="accordion__section">
      <div
        className="acc__header"
        onClick={() => setShowBody((value) => !value)}
      >
        <h3>{header}</h3>
        {showBody ? <CloseIcon /> : <AddIcon />}
      </div>
      {showBody ? (
        <div className="acc__body">
          {bodyOne}
          <br />
          <br />
          {bodyTwo}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AccordionSection;
