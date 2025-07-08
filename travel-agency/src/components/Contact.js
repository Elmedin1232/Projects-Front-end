import React, { useState } from "react";
import "../styles/Contact.css";
import "../styles/responsiveStyles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
//import { useAsyncError } from "react-router-dom";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };
  return (
    <div className="main-contact-page">
      <h1 className="contact-heading">Contact Us</h1>
      <div class="main-div">
        <div className="contact-page">
          <div className="grid-3-cols">
            <div className="contact-info">
              <FontAwesomeIcon icon={faLocationDot} />
              <h3>Address</h3>
              <p>Lokomotive 16, 71000 Sarajevo</p>
            </div>

            <div className="contact-info">
              <FontAwesomeIcon icon={faPhone} />
              <h3>Phone</h3>
              <p>+387 63 221 804</p>
            </div>

            <div className="contact-info">
              <FontAwesomeIcon icon={faClock} />
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00 - 17:00</p>
            </div>
          </div>

          <div className="contact-form">
            {showSuccess ? (
              <div className="success-message">
                We received your message. We will reply to your email address.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-group">
                  <label htmlFor="fullname">Full Name:</label>
                  <input
                    maxlength="28"
                    type="text"
                    id="fullname"
                    name="fullname"
                    required
                  />
                </div>

                <div className="contact-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="email"
                    maxlength="32"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div className="contact-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
/***************** */
