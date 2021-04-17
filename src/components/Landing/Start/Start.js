import React from "react";
import "./Start.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="start_section">
      <input type="text" placeholder="E-Mail-Adresse" className="inputField" />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button className="button">
          Get Started
          <ChevronRightIcon />
        </button>
      </Link>
    </div>
  );
}

export default Start;
