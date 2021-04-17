import React from "react";
import "./Header.css";
import logo from "../../../media/img/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__landing">
      <img src={logo} className="header__landign__logo" alt="logo"></img>
      <Link to="/login">
        <button className="header__landign__button">Sign in</button>
      </Link>
    </div>
  );
}

export default Header;
