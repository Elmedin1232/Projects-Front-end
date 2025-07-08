import React, { useEffect, useState } from "react";
import { BookingModal } from "./BookingModal";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faMoneyBill,
  faCalendar,
  faUtensils,
  faHotel,
  faPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Tour Styles/TourDetails.css";
import "../../styles/responsiveStyles/TourDetails.css";
const tourDetails = {
  1: {
    title: "Toledo Explorer",
    location: "Spain",
    duration: "5 days",
    price: "€622",
    description:
      "Explore the historic city of Toledo, known for its rich cultural heritage and stunning architecture. Visit medieval monuments, learn about traditional crafts, and enjoy authentic Spanish cuisine.",
    included: [
      "Professional English speaking guide",
      "4 nights in 4-star hotel",
      "All breakfasts and dinners",
      "Entrance to Alcázar of Toledo",
    ],
    highlights: [
      "Visit to Alcázar of Toledo",
      "Traditional sword-making workshop",
      "El Greco Museum tour",
      "Mirador del Valle",
      "Medieval city walls walk",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        activities: "Airport transfer, hotel check-in, welcome dinner",
      },
      {
        day: 2,
        title: "Historic Toledo",
        activities: "Alcázar visit",
      },
      {
        day: 3,
        title: "Art & Craft",
        activities: "El Greco Museum, sword-making workshop",
      },
      {
        day: 4,
        title: "Culture",
        activities: "City walls walk, and farewell dinner",
      },
      {
        day: 5,
        title: "Departure",
        activities: "Breakfast, airport transfer",
      },
    ],
  },

  2: {
    title: "Dubai Luxury Experience",
    location: "United Arab Emirates",
    duration: "7 days",
    price: "€1,722",
    description:
      "Immerse yourself in the opulence of Dubai, where traditional Arabian charm meets futuristic vision. Experience luxury shopping, desert adventures, and iconic architectural marvels.",
    included: [
      "Professional English/ Arabic speaking guide",
      "6 nights in 5-star luxury hotel",
      "Daily breakfast and 3 specialty dinners",
      "Desert safari with BBQ dinner",
      "Burj Khalifa observation deck tickets",
      "Dubai Mall shopping experience",
      "Airport transfers in luxury vehicle",
    ],
    highlights: [
      "Visit to Burj Khalifa",
      "Desert Safari adventure",
      "Dubai Mall and Gold Souk tour",
      "Palm Jumeirah exploration",
      "Traditional Arabian dinner cruise",
      "Dubai Miracle Garden visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Grand Arrival",
        activities:
          "VIP airport transfer, luxury hotel check-in, welcome dinner at rooftop restaurant",
      },
      {
        day: 2,
        title: "Modern Dubai",
        activities: "Burj Khalifa visit, Dubai Mall shopping, fountain show",
      },
      {
        day: 3,
        title: "Desert Adventure",
        activities:
          "Morning at leisure, afternoon desert safari, camel riding, BBQ dinner under stars",
      },
      {
        day: 4,
        title: "Cultural Discovery",
        activities:
          "Old Dubai tour, Gold Souk visit, traditional market exploration",
      },
      {
        day: 5,
        title: "Island Paradise",
        activities:
          "Palm Jumeirah tour, Atlantis Aquaventure, evening dhow cruise",
      },
      {
        day: 6,
        title: "Garden & Leisure",
        activities:
          "Dubai Miracle Garden, afternoon at leisure, farewell dinner",
      },
      {
        day: 7,
        title: "Departure",
        activities: "Breakfast, luxury airport transfer",
      },
    ],
  },
  3: {
    title: "Santorini Dream",
    location: "Greece",
    duration: "6 days",
    price: "€834",
    description:
      "Experience the magic of Santorini, with its stunning white-washed buildings, and spectacular sunsets. Enjoy fresh Mediterranean cuisine, and unforgettable views.",
    included: [
      "Professional English speaking guide",
      "5 nights in Boutique Cave hotel",
      "Daily breakfast and sunset",
      "Catamaran cruise with lunch",
      "Cooking class with local chef",
      "Airport/port transfers",
    ],
    highlights: [
      "Oia sunset experience",
      "Volcanic islands cruise",
      "Traditional cooking class",
      "Fira-Capital of Santorini, great shopping, cliffside views.",
      "Caldera hiking trail",
      "Red and Black beach visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Island Welcome",
        activities:
          "Airport transfer, hotel check-in, evening walk in Fira, welcome dinner",
      },
      {
        day: 2,
        title: "Caldera Adventure",
        activities:
          "Caldera hiking trail, traditional villages tour, sunset in Oia",
      },
      {
        day: 3,
        title: "Sailing & Swimming",
        activities:
          "Catamaran cruise, volcanic islands visit, hot springs swim, onboard lunch",
      },
      {
        day: 4,
        title: "Culture & Cuisine",
        activities: "Morning cooking class, afternoon beach time",
      },
      {
        day: 5,
        title: "Island Exploration",
        activities:
          "Red Beach, Black Beach, Akrotiri archaeological site, farewell dinner",
      },
      {
        day: 6,
        title: "Departure",
        activities: "Breakfast, airport transfer",
      },
    ],
  },

  4: {
    title: "Istanbul - Heart of Empires",
    location: "Türkye",
    duration: "8 days",
    price: "€1,649",
    description:
      "Istanbul, where East meets West, is a vibrant city rich in history about Empires, culture, and breathtaking architecture. Explore ancient landmarks like Hagia Sophia, and Blue Mosque, wander through the lively Grand Bazaar, and enjoy stunning views of the Bosphorus. ",
    included: [
      "Professional English/ Turkish speaking guide",
      "4 nights in Ottoman's Life Hotel Deluxe",
      "4 nights in Askadar Çatı Otel",
      "Daily breakfast and special dinner with baklava dessert",
      "Beautiful sunset and night views on cruise",
      "Airport transfer",
    ],
    highlights: [
      "Visit to Hagia Sophia",
      "Topkapi Palace",
      "Grand Bazaar",
      "Bosphorus Cruise",
      "Galata Tower",
      "Turkish Cousine & Street Food",
      "Spice Bazaar (Egyptian Bazaar)",
    ],

    itinerary: [
      {
        day: 1,
        title: "Welcome to Fatih",
        activities:
          "Check into Ottoman's Life Hotel Deluxe, explore Sultanahmet Square, evening orientation walk in the historical peninsula.",
      },

      {
        day: 2,
        title: "Heart of Old Istanbul",
        activities:
          "Visit Hagia Sophia, Blue Mosque, underground Basilica Cistern, and end with a traditional dinner at a local Fatih restaurant.",
      },

      {
        day: 3,
        title: "Ottoman Splendor",
        activities:
          "Full day at Topkapi Palace including Harem, explore Gulhane Park, visit Turkish and Islamic Arts Museum in Sultanahmet.",
      },

      {
        day: 4,
        title: "Historical Markets",
        activities:
          "Explore Grand Bazaar, visit Suleymaniye Mosque, discover Spice Bazaar, enjoy traditional coffee at Kurukahveci Mehmet Efendi.",
      },

      {
        day: 5,
        title: "Asian Side Welcome",
        activities:
          "Check into Askadar Çatı Otel, explore Uskudar waterfront, visit Maiden's Tower, evening dinner with Bosphorus views.",
      },

      {
        day: 6,
        title: "Kadikoy Adventure",
        activities:
          "Explore Kadikoy Market, lunch at Ciya Sofrasi, stroll through Moda neighborhood, sunset at Moda Coastal Park.",
      },

      {
        day: 7,
        title: "Bosphorus Heritage",
        activities:
          "Visit Beylerbeyi Palace, explore Kuzguncuk's colorful streets, afternoon Bosphorus cruise, dinner at Kandilli Fish Restaurant.",
      },

      {
        day: 8,
        title: "Farewell from Asia",
        activities:
          "Morning at Camlica Mosque, shopping at Bagdat Avenue, farewell dinner with Turkish entertainment at Feriye Palace.",
      },
    ],
  },

  5: {
    title: "The Art of Paris",
    location: "France",
    duration: "4 days",
    price: "€589",
    description:
      "Immerse yourself in the artistic soul of Paris, from world-famous museums to charming Montmartre streets. Experience the city's rich cultural heritage, iconic architecture, and renowned culinary scene.",
    included: [
      "Professional English/French speaking guide",
      "3 nights in boutique hotel near Le Marais",
      "Daily breakfast and one dinner cruise",
      "Skip-the-line museum passes",
      "Metro passes for all days",
      "Seine River dinner cruise",
    ],
    highlights: [
      "Guided Louvre Museum tour",
      "Musée d'Orsay visit",
      "Montmartre art district walk",
      "Seine River dinner cruise",
      "Eiffel Tower visit",
      "Le Marais food tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paris",
        activities:
          "Hotel check-in, evening orientation walk through Le Marais, welcome dinner at a traditional bistro",
      },
      {
        day: 2,
        title: "Classic Art & Icons",
        activities:
          "Morning at the Louvre, afternoon Eiffel Tower visit, evening Seine River dinner cruise",
      },
      {
        day: 3,
        title: "Artistic Soul",
        activities:
          "Musée d'Orsay tour, Montmartre art district exploration, evening food tour in Le Marais",
      },
      {
        day: 4,
        title: "Au Revoir Paris",
        activities:
          "Morning visit to Centre Pompidou (optional), final patisserie experience, departure",
      },
    ],
  },

  6: {
    title: "Journey Through Riyadh",
    location: "Kingdom of Saudi Arabia",
    duration: "5 days",
    price: "€1,039",
    description:
      "Discover the blend of modern luxury and rich heritage in Riyadh, Saudi Arabia's dynamic capital. Experience traditional souks, modern skyscrapers, historical sites, and authentic Arabian hospitality.",
    included: [
      "Professional English/Arabic speaking guide",
      "4 nights in 5-star hotel",
      "Daily breakfast and traditional dinners",
      "All entrance fees to attractions",
      "Desert safari experience",
      "Airport transfers in luxury vehicle",
      "Traditional Saudi coffee experience",
    ],
    highlights: [
      "Kingdom Centre Tower visit",
      "Historical Diriyah tour",
      "National Museum exploration",
      "Edge of the World adventure",
      "Traditional Souk shopping",
      "Desert camp experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Modern Riyadh Welcome",
        activities:
          "Luxury hotel check-in, Kingdom Centre Tower visit, welcome dinner at Najd Village Restaurant",
      },
      {
        day: 2,
        title: "Historical Heritage",
        activities:
          "Full-day tour of Diriyah UNESCO site, traditional lunch, evening walk in Al-Masmak Fortress",
      },
      {
        day: 3,
        title: "Cultural Immersion",
        activities:
          "National Museum tour, traditional souk visit, Saudi coffee experience, dinner at local family home",
      },
      {
        day: 4,
        title: "Desert Adventure",
        activities:
          "Edge of the World day trip, desert camp experience, traditional music and dance show",
      },
      {
        day: 5,
        title: "Farewell to Riyadh",
        activities:
          "Morning at King Abdullah Financial District, last-minute shopping at modern malls, departure",
      },
    ],
  },

  7: {
    title: "Palaces & Gardens in Marrakech",
    location: "Morocco",
    duration: "5 days",
    price: "€1,149",
    description:
      "Journey through the enchanting Red City of Marrakech, exploring opulent palaces, serene gardens, and vibrant souks. Experience the magic of Moroccan architecture, culture, and hospitality in this imperial city.",
    included: [
      "Professional English/French/Arabic speaking guide",
      "4 nights in traditional riad",
      "Daily breakfast and two traditional dinners",
      "All entrance fees to monuments",
      "Cooking class experience",
      "Airport transfers",
      "Camel ride at sunset",
    ],
    highlights: [
      "Bahia Palace tour",
      "Majorelle Gardens visit",
      "Medina exploration",
      "Atlas Mountains day trip",
      "Traditional hammam experience",
      "Sunset camel ride",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Marrakech",
        activities:
          "Riad check-in, evening orientation walk through the Medina, welcome dinner at rooftop restaurant",
      },
      {
        day: 2,
        title: "Royal Palaces & Gardens",
        activities:
          "Morning at Bahia Palace, Majorelle Gardens visit, afternoon tea at La Mamounia, evening food tour in Djemaa el-Fna",
      },
      {
        day: 3,
        title: "Atlas Mountains Adventure",
        activities:
          "Day trip to Atlas Mountains, visit Berber village, traditional lunch with local family, sunset camel ride",
      },
      {
        day: 4,
        title: "Cultural Immersion",
        activities:
          "Morning cooking class, traditional hammam experience, afternoon exploring the souks, dinner in the Medina",
      },
      {
        day: 5,
        title: "Farewell to Marrakech",
        activities:
          "Morning visit to Koutoubia Mosque gardens, last-minute shopping in the Medina, departure",
      },
    ],
  },

  8: {
    title: "Stones of Verona",
    location: "Italy",
    duration: "3 days",
    price: "€442",
    description:
      "Explore the romantic city of Verona, where Shakespeare's Romeo and Juliet was set. Discover ancient Roman architecture, medieval squares, and Renaissance art while enjoying the charm of this UNESCO World Heritage site.",
    included: [
      "Professional English/Italian speaking guide",
      "2 nights in boutique hotel in historic center",
      "Daily breakfast and one dinner",
      "Verona Card for attractions",
      "Walking tour of historic center",
    ],
    highlights: [
      "Arena di Verona visit",
      "Juliet's House tour",
      "Piazza delle Erbe exploration",
      "Castelvecchio Museum",
      "Valpolicella wine tasting",
      "Roman Theatre visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Roman Verona",
        activities:
          "Hotel check-in, guided tour of Arena di Verona, evening walk through historic center, welcome dinner in traditional osteria",
      },
      {
        day: 2,
        title: "Medieval & Renaissance Gems",
        activities:
          "Morning visit to Juliet's House, Piazza delle Erbe market, afternoon at Castelvecchio",
      },
      {
        day: 3,
        title: "Hidden Treasures",
        activities:
          "Roman Theatre visit, Giardino Giusti exploration, free time for shopping, departure",
      },
    ],
  },

  9: {
    title: "Gardaland: Rides & Fun",
    location: "Italy",
    duration: "2 days",
    price: "€277",
    description:
      "Experience Italy's premier theme park, Gardaland, offering thrilling rides, spectacular shows, and magical attractions for all ages. Located near Lake Garda, this adventure combines excitement with beautiful surroundings.",
    included: [
      "2-day Gardaland entrance tickets",
      "1 night in Gardaland themed hotel",
      "Breakfast and dinner at hotel",
      "Skip-the-line passes for major attractions",
      "Evening show tickets",
      "Shuttle service from Peschiera station",
    ],
    highlights: [
      "Raptor roller coaster",
      "Jungle Rapids adventure",
      "Fantasy Kingdom attractions",
      "Gardaland SEA LIFE Aquarium",
      "Evening spectacular show",
      "Meet and greet with mascots",
    ],
    itinerary: [
      {
        day: 1,
        title: "Thrills & Adventures",
        activities:
          "Morning park entry, experience major thrill rides, afternoon at SEA LIFE Aquarium, evening dinner and spectacular show",
      },
      {
        day: 2,
        title: "Family Fun",
        activities:
          "Fantasy Kingdom exploration, water rides and shows, character meet and greets, afternoon departure",
      },
    ],
  },
};

function TourDetails() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const tour = tourDetails[id];

  if (!tour) {
    return <div className="error-message">Tour not found</div>;
  }

  return (
    <div className="tour-details-container">
      <div className="tour-header">
        <h1>{tour.title}</h1>
        <div className="tour-meta">
          <span>
            <FontAwesomeIcon icon={faLocationDot} /> {tour.location}
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} /> {tour.duration}
          </span>
          <span>
            <FontAwesomeIcon icon={faMoneyBill} /> {tour.price}
          </span>
        </div>
      </div>

      <div className="tour-content">
        <section className="tour-description">
          <h2>About This Tour</h2>
          <p>{tour.description}</p>
        </section>

        <section className="tour-highlights">
          <h2>Tour Highlights</h2>
          <ul>
            {tour.highlights.map((highlight, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="tour-included">
          <h2>What's Included</h2>
          <ul>
            {tour.included.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheck} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="tour-itinerary">
          <h2>Itinerary</h2>
          <div className="itinerary-timeline">
            {tour.itinerary.map((day) => (
              <div key={day.day} className="day-item">
                <div className="day-number">Day {day.day}</div>
                <div className="day-content">
                  <h3>{day.title}</h3>
                  <p>{day.activities}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="booking-section"></div>
      </div>
      <button className="book-button" onClick={handleBooking}>
        Book This Tour
      </button>
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tourTitle={tour.title}
        location={tour.location}
        price={tour.price.toString()}
        duration={tour.duration}
      />
    </div>
  );
}

export default TourDetails;
