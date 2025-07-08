import React from "react";
import "../styles/Home.css";
import "../styles/responsiveStyles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEarthAmerica,
  faUsersBetweenLines,
  faTrophy,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const infoArray = [
  {
    id: 1,
    iconName: faEarthAmerica,
    mainText: "10+ tours",
    text: "This is how we progress and thrive for success",
  },

  {
    id: 2,
    iconName: faUsersBetweenLines,
    mainText: "Private tours",
    text: "Private tours with private arrangements",
  },

  {
    id: 3,
    iconName: faTrophy,
    mainText: "Best team around the globe",
    text: "Friendly, pedantical, humorous",
  },
];

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-content">
          <h2>Travel with us and have unforgettable moments!</h2>
        </div>
        <BasicInfo />
      </div>
      <Link className="home-link" to="/tours">
        Popular Tours &rarr;
      </Link>
      <Reviews />
    </div>
  );
}

function BasicInfo() {
  return (
    <div>
      <div class="grid-3-cols tour-basics">
        {infoArray.map((info) => (
          <div class="info-container">
            <FontAwesomeIcon className="icon" icon={info.iconName} />
            <div class="text-container">
              <h3>{info.mainText}</h3>
              <p>{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const reviewInfo = [
  {
    id: 1,
    text: "What an incredible experience! Toledo is a hidden gem. The views from Alcazar were breathtaking, and the local cousine was marvelous! Thanks to Our Travel, everything was perfectly organized. A trip to remember!",
    name: "Alina",
    country: "Germany",
    rating: 5,
  },

  {
    id: 2,
    text: "Santorini exceeded all my expectations. The food, the views, the island — everything was perfect! Our Travel managed to fulfill everything we asked and I'll definitely be booking through this agency again! ",
    name: "Tomas",
    country: "Slovakia",
    rating: 5,
  },

  {
    id: 3,
    text: "We had an amazing time in Gardaland! the rollercoasters were amazing, and there was something for everyone in our group. Our Travel took care of all the tickets and transfers, making the trip hassle-free.",
    name: "Robert",
    country: "Poland",
    rating: 5,
  },

  {
    id: 4,
    text: "Istanbul is a city that truly has it all — rich history, stunning architecture, delicious food, and vibrant culture. Our Travel made exploring the city so easy and enjoyable. The guided tours were fantastic, and I especially loved the visit to the Hagia Sophia Mosque and Grand Bazaar. Every detail was taken care of, from transfers to the restaurant recommendations. Highly recommend this trip!",
    name: "Ana",
    country: "Croatia",
    rating: 5,
  },

  {
    id: 5,
    text: "This was my first trip to Morocco, and Marrakech was beyond my dreams. The sights, sounds, and smells of the city were magical. A lot of thanks to Our Travel for making this tour amazing and easy, from the desert exursion to the perfect hotel stay!",
    name: "Davud",
    country: "Montenegro",
    rating: 5,
  },

  {
    id: 6,
    text: "I booked a Verona city tour through Our Travel, and it turned out to be one of the highlights of my trip! From the moment we arrived, the city's charm completely took me over. The guide was incredibly knowledgeable and shared fascinating storie's about Verona's history, escpecially the connections to Shakespeare's Romeo and Juliet.",
    name: "Milan",
    country: "Czechia",
    rating: 5,
  },
];

function Reviews() {
  return (
    <div className="reviews-container">
      <h2>What Our Customers Say</h2>
      <div className="review-grid">
        {reviewInfo.map((review) => (
          <div key={review.id} className="review">
            <div className="review-rating">
              {Array.from({ length: review.rating }, (_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <p className="review-author">
              {review.name}, {review.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
/****** */
