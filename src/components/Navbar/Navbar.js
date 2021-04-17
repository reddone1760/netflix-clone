import React, { useEffect, useState } from "react";
import "./Navbar.css";
import CurrentUser from "../CurrentUser/CurrentUser";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import RedeemIcon from "@material-ui/icons/Redeem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Navbar() {
  const [show, setShow] = useState(false);

  const [search, setSearch] = useState(false);
  const [searchValue, serSearchValue] = useState("");

  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2000px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
        <ul className="navbarlist">
          <li className="navbar__links dropdown">
            <Link to="/" className="nav__link drop">
              Browse <ArrowDropDownIcon />
            </Link>
          </li>
          <li className="navbar__links nodropdown">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="navbar__links nodropdown">
            <Link to="/" className="nav__link">
              TV Shows
            </Link>
          </li>
          <li className="navbar__links nodropdown">
            <Link to="/" className="nav__link">
              Movies
            </Link>
          </li>
          <li className="navbar__links nodropdown">
            <Link to="/" className="nav__link">
              News & Popular
            </Link>
          </li>
          <li className="navbar__links nodropdown">
            <Link to="/my-list" className="nav__link">
              My List
            </Link>
          </li>
        </ul>
        <ul className="navbarlistRight">
          <li className="navbar__links">
            <Link to="/" className="nav__link">
              <form
                className={search ? "searchOpen search" : "searchClose search"}
              >
                <input
                  onChange={(e) => {
                    serSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  type="text"
                />

                <button>
                  <SearchIcon
                    onClick={() => {
                      setSearch(!search);
                    }}
                    className="searchIcon"
                    style={{ fontSize: 16 }}
                  />
                </button>
              </form>
            </Link>
          </li>
          <li className="navbar__links">
            <Link to="/" className="nav__link">
              <RedeemIcon style={{ fontSize: 16 }} />
            </Link>
          </li>
          <li className="navbar__links">
            <Link to="/" className="nav__link">
              <NotificationsIcon style={{ fontSize: 16 }} />
            </Link>
          </li>
        </ul>

        <div onClick={() => history.push("/profile")}>
          <CurrentUser img nav />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
