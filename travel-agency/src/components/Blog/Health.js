import React from "react";
import "./AllBlog.css";
import "../../styles/responsiveStyles/AllBlog.css";
import healthImage from "../../imgs/health.jpg";
import { useEffect } from "react";

const healthInfo = [
  {
    id: 1,
    title: "1. Stay Hydrated",
    text: "Traveling, especially on planes or in hot climates, can quickly dehydrate you. Water is your best friend when it comes to maintaining energy levels, promoting digestion, and supporting your immune system. Carry a reusable water bottle and make a habit of sipping throughout the day, especially if you're in a different climate.",
  },

  {
    id: 2,
    title: "2. Maintain a Balanced Diet",
    text: "While it can be tempting to indulge in local street food or travel treats, aim for a balanced diet. take fruits, vegetables, lean proteins, and whole grains into your meals to give your body the nutritions it needs. Try to avoid excessive junk food, which can leave you feeling sluggish and disrupt your digestion.",
  },

  {
    id: 3,
    title: "3. Get Enough Sleep",
    text: "Quality rest is crucial for maintaining health and energy. Prioritize sleep by making a relaxing bedtime routine, limiting screen time before bed, and adjusting to the local time zone as soon as possible. A well-rested traveler is a happy traveler.",
  },

  {
    id: 4,
    title: "4. Stay Active",
    text: "Being active helps you combat travel fatigue, improves circulation, and boosts your mood. Take advantage of opportunities to walk around or explore your destination on foot. If you're in a hotel, consider using the fitness center or doing quick bodyweight exercises in your room, even if you exercise for a short time.",
  },

  {
    id: 5,
    title: "5. Practice Good Hygiene",
    text: "Traveling exposes you to new environments, which can increasy the risk of infections. Wash your hands regularly, and carry hand sanitizer. If you're in a region with different sanitation practices, consider using bottled water for brushing your teeth and make sure to drink only purified water. ",
  },

  {
    id: 6,
    title: "6. Listen to Your Body",
    text: "Lastly, don't ignore any signs of fatigue, illness, or discomfort. If you're feeling drained or noticing symptoms of a cold or upset stomach, take it easy and give your body time to rest and recover. Sometimes, slowing down can prevent more serious health issues and allow you to continue enjoying your travels.",
  },
];

function Health() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="travel-div">
      <img src={healthImage} alt="Health" />
      <span className="span-date">17 June 2025</span>
      <p className="travel-text-intro">
        Traveling is an exciting way to explore new cultures, enjoy unique
        experiences and take a break from the daily grind. However, between long
        flights, different time zones, unfamiliar food, and unpredictable
        environments, maintaining your health on the road can be a challenge.
        Whether you're embarking on a short vacation or a long-term adventure,
        taking care of your body should always be a priority.
      </p>

      {healthInfo.map((health) => (
        <section key={health.id} className="travel-section">
          <h3 className="travel-title">{health.title}</h3>
          <p className="travel-text">{health.text}</p>
        </section>
      ))}
    </div>
  );
}

export default Health;
