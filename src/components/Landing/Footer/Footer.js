import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__head">
        Questions? Call:{" "}
        <span className="footer__tel hover">-------------</span>
      </h3>
      <div className="footer__main">
        <p className="hover">FAQ</p>
        <p className="hover">Help Center</p>
        <p className="hover">Account</p>
        <p className="hover">Media Center</p>
        <p className="hover">Investor Relations</p>
        <p className="hover">Jobs</p>
        <p className="hover">Redeem Gift Cards</p>
        <p className="hover">Buy Gift Cards</p>
        <p className="hover">Ways to Watch</p>
        <p className="hover">Terms of Use</p>
        <p className="hover">Privacy</p>
        <p className="hover">Cookie Preferences</p>
        <p className="hover">Impressum</p>
        <p className="hover">Contact Us</p>
        <p className="hover">Speed Test</p>
        <p className="hover">Legal Notices</p>
        <p className="hover">Netflix Clone</p>
      </div>
      <div className="choosLang">
        <label for="language">
          <LanguageIcon />
        </label>
        <select id="lang" name="language">
          <option value="deutsch">Englisch</option>
          <option value="englisch">Deutsch</option>
        </select>
      </div>
      <h4 className="footer__bottom">
        Netflix Clone | No rights reserved. This is just a clone to improve my
        skills
      </h4>
    </div>
  );
}

export default Footer;
