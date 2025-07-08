import React from "react";
import "../styles/Footer.css";
import "../styles/responsiveStyles/Footer.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div-main">
        <section className="footer-section">
          <h3>Our Contact</h3>
          <span>
            <FontAwesomeIcon icon={faPhone} /> +387 63 221 804
          </span>
        </section>

        <section className="footer-section">
          <h3>Support</h3>
          <Link to="/terms&conditions" className="link-support">
            Terms & Conditions
          </Link>
          <Link to="/privacypolicy" className="link-support">
            Privacy Policy
          </Link>
        </section>
      </div>
      <h3 className="email-heading">Email: info@ourtravel.com</h3>
      <p className="copyright">
        Copyright &#169; by Our Travel. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
