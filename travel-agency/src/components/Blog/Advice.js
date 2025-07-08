import React from "react";
import "./AllBlog.css";
import "../../styles/responsiveStyles/AllBlog.css";
import adviceImage from "../../imgs/travel-plan.jpg";
import { useEffect } from "react";

const adviceInfo = [
  {
    id: 1,
    title: "1. Check Passport and Visa Requirements",
    text: "Make sure your paspsort is valid for at least 6 months beyond your return date. Research visa requirements for your destination country and apply in advance if necessary.",
  },

  {
    id: 2,
    title: "2. Book Flights and Accommodations Early",
    text: "Booking in advance often means better prices and more options, especially during peak seasons. Compare different platforms for the best deals on flights and accommodations.",
  },

  {
    id: 3,
    title: "3. Research Local Customs and Laws",
    text: "Understanding basic etiquette, dress codes, and local regulations helps you avoid misunderstandings and show respect for the culture you're visiting.",
  },

  {
    id: 4,
    title: "4. Set a Realistic Budget",
    text: "Determine how much you can spend per day and account for accommodations, meals, transportations, entrance fees, and extras like souvenirs or tips.",
  },

  {
    id: 5,
    title: "5. Sort Out Curency and Payment Options",
    text: "Check if your debit/credit cards work internationally. It's wise to carry a small amount of local currency for immediate expenses upon arrival.",
  },

  {
    id: 6,
    title: "6. Prepare Important Documents",
    text: "Keep digital and physical copies of important documents like your passport, visa, insurance, travel bookings, and emergency contacts.",
  },

  {
    id: 7,
    title: "7. Check Health Requirements and Vaccinations",
    text: "Visit a travel clinic if needed and make sure you're up to date on required orrecommended vaccinations. Pack a basic travel health kit with essentials.",
  },

  {
    id: 8,
    title: "8. Notify Your Bank and Mobile Provider",
    text: "Let your bank know you'll be traveling to avoid card blocks. Check your mobile plan for international coverage or consider getting a local SIM card or eSIM.",
  },
];

function Advice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="travel-div">
      <img src={adviceImage} alt="Health" />
      <span className="span-date">17 June 2025</span>
      <p className="travel-text-intro">
        Traveling opens the door to unforgettable experiences, new cultures and
        exciting adventures. Whether you're planning a weekend gataway or a
        months-long world tour, a little preparation can go a long way in
        ensuring a stress-free and enjoyable trip. In this section, we've put
        essential travel advice to help you stay safe, save money, and make the
        most of every moment. From packing trips to etiquette, consider this
        your go-to guide before you hit the road.
      </p>

      {adviceInfo.map((advice) => (
        <section key={advice.id} className="travel-section">
          <h3 className="travel-title">{advice.title}</h3>
          <p className="travel-text">{advice.text}</p>
        </section>
      ))}
    </div>
  );
}

export default Advice;
