import "../styles/About.css";
import "../styles/responsiveStyles/About.css";
import imageTravel from "../imgs/travel.jpg";
import imageTravel2 from "../imgs/travel2.jpg";

const ourInfo = [
  {
    text: "Our Travel was established by 3 young travelers who shared one big dream: to help others experience the world in a more personal, exciting, and meaningful way. What started as a small idea between friends turned into a full-fledged travel agency fueled by curiosity, adventure, and love for connecting people to new cultures.",
    photoName: imageTravel,
  },
  {
    text2:
      "Our very first tour was with a small group that combined breathtaking views with local hospility, and it was an unforgetful success. Since then, we've organized 10+ tours across various destinations, provided services for more than 10.000 travelers, each one carefully crafted to offer more than just sightseeing. We focus on real experiences, and smooth journeys.",
    photoName2: imageTravel2,
  },
];

function About() {
  return (
    <div>
      <header className="header-about">
        <h1>About Us</h1>
      </header>

      {ourInfo.map((info) => (
        <div className="grid-2-cols-about section-about">
          <p>{info.text}</p>
          <div className="image-about">
            <img src={info.photoName} />
          </div>

          <div className="image-about">
            <img src={info.photoName2} />
          </div>
          <p>{info.text2}</p>
        </div>
      ))}
      <section className="section-staff">
        <h3>Why travel with us?</h3>
        <ul className="list-travel">
          <li>
            <strong>Personalized attention</strong> - we keep our groups small
            and our service big
          </li>

          <li>
            <strong>Passionate experts</strong> - we're travelers ourselves, so
            we know what matters
          </li>

          <li>
            <strong>Memorable experiences</strong> - from hidden gems to
            cultural encounters
          </li>
        </ul>
      </section>
      <Team />
    </div>
  );
}

function Team() {
  return (
    <div className="team-about">
      <h2>Our Team</h2>
      <div className="team-grid">
        <section>
          <h3>Bakir Muharemović</h3>
          <p>Tour Guide</p>
          <p>Foreign Languages: English, French, Spanish</p>
        </section>

        <section>
          <h3>Benjamin Kamenić</h3>
          <p>Tour Guide</p>
          <p>Foreign Languages: English, Arabic, Italian</p>
        </section>

        <section>
          <h3>Ernad Pandur</h3>
          <p>Tour Guide</p>
          <p>Foreign Languages: English, Arabic, Turkish</p>
        </section>

        <section>
          <h3>Amar Rizvo</h3>
          <p>Tour Guide</p>
          <p>Foreign Languages: English, Turkish, French</p>
        </section>

        <section>
          <h3>Ramiza Sokolović</h3>
          <p>Financial Officer</p>
          <p>Foreign Languages: English</p>
        </section>

        <section>
          <h3>Muris Hrnjić</h3>
          <p>CEO & Founder</p>
          <p>Foreign Languages: English, Arabic, Italian</p>
        </section>
      </div>
    </div>
  );
}

export default About;
