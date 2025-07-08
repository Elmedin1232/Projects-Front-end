import react from "react";
import "./Terms.css";
import "../../styles/responsiveStyles/Terms&Conditions.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-conditions-div">
      <h1>Terms & Conditions</h1>
      <section className="terms-conditions-section">
        <h3 className="title">Terms & Conditions</h3>
        <h3 className="subtitle">Introduction</h3>
        <p className="text">
          Welcome to <strong>Our Travel</strong>. By booking any travel services
          with us, you agree to comply by the following Terms & Conditions.
          These terms outline both our responsibilities as a travel provider and
          your responsibilities as a customer, as well as the policies regarding
          bookings, cancellations, and other aspects of your tavel experience.{" "}
          <br />
          Please, read these Terms & Conditions carefully before making a
          booking. If you have any questions, don't hesitate to reach out to us.
        </p>

        <h3 className="subtitle">1. Responsibilities of Our Travel</h3>
        <p className="text">
          At Our Travel, we are committed to providing you with the highest
          quality service. Our responsibilities include:
        </p>
        <ul className="list-terms">
          <li>
            <strong>Providing Accurate Information:</strong> We strive to
            provide you with accurate and up-to-date information regarding the
            services we offer, flight details, accommodation, transport, and
            activities.
          </li>

          <li>
            <strong>Booking & Reservation Conformation:</strong> Once your
            booking is confirmed, we will ensure that all travel services
            (flights, hotels, transportations, etc.) are booked and reserved as
            per your request.
          </li>

          <li>
            <strong>Customer Support:</strong> We provide assistance before,
            during, and after your travel, offering support for any issues that
            may arise related to the services we have arranged.
          </li>

          <li>
            <strong>Refunds and Compensations:</strong> In the event of
            cancellations or changes to your itinerary that are our
            responsibility, we will ensure appropriate compensation or refund as
            per our policies.
          </li>
        </ul>

        <h3 className="subtitle">2. Responsibilities of the Customer</h3>
        <p className="text">
          As a customer, you have certain responsibilities in order to ensure a
          smooth and enjoyable travel experience. these include, but are not
          limited to:
        </p>
        <ul className="list-terms">
          <li>
            <strong>Providing Accurate Information:</strong> You must provide
            accurate personal information during the booking process, including
            but not limited to your full name, contact details, and any specific
            travel preferences. It is your responsibility to ensure that all
            information provided is correct.
          </li>

          <li>
            <strong>Payment:</strong> You agree to pay the full price for your
            travel services as agreed upon at the time of booking, including any
            additional costs that may arise, such as taxes, fees, and extras.
          </li>

          <li>
            <strong>Compliance with Travel Requirements:</strong> You must
            comply with all applicable laws, regulations, and entry requirements
            (such as visas, vaccinations, etc.) for your destination when
            necessary. It is your responsibility to ensure you have the
            necessary documentation before traveling.
          </li>

          <li>
            <strong>Timely Arrival and Departure:</strong> You are responsible
            for ensuring that you arrive at the airport, train station, or other
            travel points on time. Any missed transportation due to late arrival
            will not be the responsibility of Our Travel Agency.
          </li>
        </ul>

        <h3 className="subtitle">3. Bookings</h3>
        <ul className="list-terms">
          <li>
            <strong>Booking Process:</strong> To make a booking, you can visit
            our website, contact us via email, or speak with a representative
            over the phone. We will guide you through the booking process and
            ensure that you select the best travel options.
          </li>

          <li>
            <strong>Booking Confirmation:</strong> Once your booking is
            confirmed, you will receive a confirmation email with all the
            details, including your travel itinerary, accommodation details, and
            payment receipt.
          </li>

          <li>
            <strong>Payment Terms:</strong> Full payment is required at the time
            of booking, unless otherwise specified. Some bookings may require a
            deposit with the balance due closer to the departure date.
          </li>

          <li>
            <strong>Group Bookings:</strong> For group bookings, a different set
            of policies may apply, including but not limited to deposits, final
            payment deadlines, and cancellation fees.
          </li>
        </ul>

        <h3 className="subtitle">4. Cancellations and Amendments</h3>

        <p className="text">
          Customer-Initiated Cancellations: If you wish to cancel your booking,
          please notify us as soon as possible. Cancellations are subject to the
          terms and conditions of the suppliers (hotels, airlines, tour
          operators, etc.). Depending on supplier's policy, cancellation fees
          may apply, and in some cases, no refund may be issued.
        </p>
        <ul className="list-terms">
          <li>
            <strong>
              Cancellations made more than 40 days before departure:
            </strong>{" "}
            Full refund minus cancellation fees.
          </li>

          <li>
            <strong>Cancellations made between 20-35 days departure:</strong>{" "}
            50% refund minus cancellation fee.
          </li>

          <li>
            <strong>
              Cancellations made less than 20 days before departure:
            </strong>{" "}
            No refund.
          </li>
        </ul>

        <h3 className="subtitle">5. Complaints and Disputes</h3>
        <p className="text">
          Filing a Complaint: We strive to provide excellent service to all our
          customers. However, if you experience any issues or dissatisfaction
          during your trip, please report the problem to us immediately, either
          by phone or email. We will work to resolve the issue promptly.
        </p>

        <ul className="list-terms">
          <li>
            <strong>Resolution Process:</strong> Complaints regarding services
            provided by third-party suppliers (airlines, hotels, etc.) should be
            directed to the supplier. However, we will assist you in
            facilitating the resolution process.
          </li>

          <li>
            <strong>Disputes:</strong> In the unlikely event that we are unable
            to resolve a complaint, you may escalate the matter to a relevant
            consumer dispute resolution body. We will work with you to resolve
            the issue fairly and in accordance with applicable laws.
          </li>
        </ul>

        <h3 className="subtitle">6. Privacy and Data Protection</h3>
        <p className="text">
          We respect your privacy and are committed to safeguarding your
          personal data. Your information will be used solely for the purpose of
          processing your booking and ensuring the smooth delivery of travel
          services. For more information on how we collect, use, and protect
          your data, please refer to our <Link>Privacy Policy</Link>.
        </p>

        <h3 className="subtitle">7. Changes to Terms & Conditions</h3>
        <p className="text">
          Our Travel reserves the right to amend or update these Terms &
          Conditions at any time. Any changes will be communicated to you prior
          to your next booking.
        </p>
      </section>
    </div>
  );
}

export default Terms;
