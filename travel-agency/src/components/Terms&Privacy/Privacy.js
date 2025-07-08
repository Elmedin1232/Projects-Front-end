import React from "react";
import "./Privacy.css";
import "../../styles/responsiveStyles/PrivacyPolicy.css";
import { useEffect } from "react";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className="privacy-policy-main-heading">Privacy Policy</h1>
      <section className="privacy-policy-section">
        <h3 className="subheading-date">17 June 2025</h3>
        <p className="text">
          At <i>Our Travel</i>, we value and respect your privacy. The Privacy
          Policy outlines how we collect, use, store, and protect your personal
          information when you visit or engage with our services. By using our
          website and services, you agree to the collection and use of
          information as described in policy.
        </p>

        <h3 className="privacy-policy-subheading">1. Information We Collect</h3>
        <p className="text">
          When you interact with Our Travel, we would need to collect various
          types of information, including:
        </p>

        <ul className="list-privacy-policy">
          <li>
            <strong>Personal Identification Information:</strong> This includes
            your name, email address, and other details provided during bookings
            or inquiries.
          </li>
          <li>
            <strong>Payment Information:</strong> When making a reservation, we
            collect payment details such as credit/debit card numbers, billing
            addresses, and other necessary payment data, processed through
            secure third-party payment gateways.
          </li>
          <li>
            <strong>Technical Data:</strong> We may collect non-personally
            identifiable information such as your IP address, browser type,
            using cookies or tracking technologies.
          </li>

          <li>
            <strong>Booking Information:</strong> Any details related to travel
            bookings, preferences, travel dates, destinations, and special
            requests.
          </li>
        </ul>

        <h3 className="privacy-policy-subheading">
          2. How We Use Your Information
        </h3>
        <p className="text">We use the information we collect to:</p>

        <ul className="list-privacy-policy">
          <li>
            Provide, process, and manage travel bookings, itineraries, and
            related services.
          </li>
          <li>
            Communicate with you regarding your travel plans, promotions, and
            customer service inquiries.
          </li>
          <li>
            Improve and personalize your experience on our website and with our
            services.
          </li>
          <li>
            Send you relevant updates, newsletters, and marketing communications
            (with your agreement).
          </li>
          <li>
            Comply with legal requirements and protect our business interests.
          </li>
        </ul>

        <h3 className="privacy-policy-subheading">
          3. How We Protect Your Information
        </h3>
        <p className="text">
          We implement a variety of security measures to ensure the protection
          of your personal and payment information. These include:
        </p>

        <ul className="list-privacy-policy">
          <li>
            <strong>Encryption:</strong> All sensitive information is
            transmitted via Secure Socket layer (SSL) technology and encrypted
            in our database.
          </li>
          <li>
            <strong>Access Control:</strong> only authorized personnel have
            access to your personal information for the purpose of providing
            services or responding to inquiries.
          </li>
          <li>
            <strong>Regular Audits:</strong> We conduct periodic security audits
            to access the effectivness of our data protection measures.
          </li>
        </ul>
        <p className="text text-margin">
          However, of transmission over the internet is 100% secure. While we
          strive to protect your information, we cannot guarantee complete
          security.
        </p>

        <h3 className="privacy-policy-subheading">
          4. Cookies and Tracking Technologies
        </h3>

        <p className="text">
          We use cookies and similar tracking technologies to improve your
          browsing experience, analyze site traffic, and personalize content. By
          continuing to use our website, you agree to the use of cookies.
        </p>
        <p class="text">
          You can control cookie settings through your browser, but disabling
          cookies may effect your ability to use certain features on our
          website.
        </p>

        <h3 className="privacy-policy-subheading">5. Your Data Rights</h3>
        <p className="text">
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>

        <ul className="list-privacy-policy">
          <li>
            <strong>Access:</strong> You can request a copy of the personal data
            we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> you can request the correction of any
            inaccuracies in your personal information.
          </li>
          <li>
            <strong>Deletion:</strong> You may request the deletion of your
            personal data, subject to legal obligations.
          </li>

          <li>
            <strong>Opt-Out:</strong> You can opt-out of marketing
            communications at any time by clicking the "unsubscribe" link in
            emails or by contacting us directly.
          </li>
        </ul>
        <p className="text text-margin">
          To implement these rights, please contact us at{" "}
          <strong>Email: info@ourtravel.com</strong>
        </p>

        <h3 className="privacy-policy-subheading">
          6. Changes to This Privacy Policy
        </h3>
        <p className="text">
          We have the right to update or modify this Privacy Policy at any time.
          Any changes will be posted on this page with an updated "Effective
          Date". We encourage you to review this policy periodically to stay
          informed about how we are protecting your information.
        </p>
      </section>
    </div>
  );
}

export default Privacy;
