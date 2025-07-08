import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faMoneyBill,
  faBraille,
} from "@fortawesome/free-solid-svg-icons";
import toledoImage from "../../imgs/toledo.jpg";
import dubaiImage from "../../imgs/dubai.jpg";
import santoriniImage from "../../imgs/santorini.jpg";
import istanbulImage from "../../imgs/istanbul.jpg";
import parisImage from "../../imgs/paris.jpg";
import riyadhImage from "../../imgs/riyadh.jpg";
import marrakechImage from "../../imgs/marrakech.jpg";
import veronaImage from "../../imgs/verona.jpg";
import gardalandImage from "../../imgs/gardaland.jpg";
import "../../styles/Tour Styles/TourList.css";

function TourList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();
  const [popularTours, setPopularTours] = useState([
    {
      id: 1,
      image: toledoImage,
      title: "Toledo Explorer",
      location: "Spain",
      duration: "5 days",
      price: "€622",
    },

    {
      id: 2,
      image: dubaiImage,
      title: "Dubai Adventure",
      location: "United Arab Emirates",
      duration: "8 days",
      price: "€1,722",
    },

    {
      id: 3,
      image: santoriniImage,
      title: "Greek Islands",
      location: "Santorini, Greece",
      duration: "7 days",
      price: "€834",
    },

    {
      id: 4,
      image: istanbulImage,
      title: "Istanbul- Heart of Empires",
      location: "Türkye",
      duration: "8 days",
      price: "€1,649",
    },

    {
      id: 5,
      image: parisImage,
      title: "The Art of Paris",
      location: "France",
      duration: "4 days",
      price: "€589",
    },

    {
      id: 6,
      image: riyadhImage,
      title: "Journey Through Riyadh",
      location: "Kingdom of Saudi Arabia",
      duration: "5 days",
      price: "€1,039",
    },

    {
      id: 7,
      image: marrakechImage,
      title: "Palaces & Gardens in Marrakech",
      location: "Morroco",
      duration: "5 days",
      price: "€1,149",
    },

    {
      id: 8,
      image: veronaImage,
      title: "Stones of Verona",
      location: "Italy",
      duration: "3 days",
      price: "€442",
    },

    {
      id: 9,
      image: gardalandImage,
      title: "Gardaland: Rides & Fun",
      location: "Italy",
      duration: "2 days",
      price: "€277",
    },
  ]);

  return (
    <section className="popular-tours">
      <div className="tours-grid">
        {popularTours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} />
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <div className="tour-details">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {tour.location}
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  {tour.duration}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMoneyBill} />
                  {tour.price}
                </p>
              </div>
              <button
                className="book-now"
                onClick={() => navigate(`/tour/${tour.id}`)}
              >
                More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourList;
