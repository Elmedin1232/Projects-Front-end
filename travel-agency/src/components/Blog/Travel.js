import React from "react";
import travelImage from "../../imgs/travel-stuff.jpg";
import "./AllBlog.css";
import "../../styles/responsiveStyles/AllBlog.css";
import { useEffect } from "react";

const travelInfo = [
  {
    id: 1,
    title: "1. Passport/ID & Travel Documents ",
    text: "Always have your identification and necessary travel papers (boarding passes, hotel reservations, etc) on hand.",
  },

  {
    id: 2,
    title: "2. Backpack",
    text: "It's important to choose the right backpack that will be useful during the entire travel. If you are planning for adventure tours that envolve a lot of activities, the backpack will make mobility easier for you.",
  },

  {
    id: 3,
    title: "3. Portable Charger & Charger",
    text: "In today's digital age, mobile devices such as smartphones, tablets and cameras are indispensable companions on trips. It is recommended to have a portable charger and suitable chargers for all your devices. ",
  },

  {
    id: 4,
    title: "4. Cash & Cards",
    text: "Cash & debit cards, in case of paying in cash or by credit card in bakeries, restaurants, and shops.",
  },

  {
    id: 5,
    title: "5. Medications & Health Essentials",
    text: "It is always smart to have a basic first aid kit with you, which includes a plaster, analgesics, and digestive medications.",
  },
];

function Travel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="travel-div">
      <img src={travelImage} alt="Travel" />
      <span className="span-date">17 June 2025</span>
      <p className="travel-text-intro">
        When it comes to preparing for a trip, packing efficiently is key to
        ensuring a smooth journey. From crucial documents to everyday
        necessities, knowing what to bring can save your time, stress, and
        unnecessary hassle. In this guide, we'll cover the essentials you need
        to pack to ensure you're fully prepared for every travel that you take:
      </p>

      {travelInfo.map((travel) => (
        <section key={travel.id} className="travel-section">
          <h3 className="travel-title">{travel.title}</h3>
          <p className="travel-text">{travel.text}</p>
        </section>
      ))}
    </div>
  );
}

export default Travel;
