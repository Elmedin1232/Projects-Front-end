import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import travelImage from "../imgs/travel-stuff.jpg";
import healthImage from "../imgs/health.jpg";
import planImage from "../imgs/travel-plan.jpg";
import Advice from "./Blog/Advice";
import Health from "./Blog/Health";
import Travel from "./Blog/Travel";
import "../styles/Blog.css";
import "../styles/responsiveStyles/Blog.css";

const blogInfo = [
  {
    id: 1,
    title: "Things we need to bring for the travel",
    date: "17 June 2025",
    url: "/blog/travel",
    imageName: travelImage,
    alt: "Travel",
    text: "Planning your next adventure? At Our Travel, we know how exciting, and sometimes stressfull—getting readyfora a trip can be. Packing smart is the key to a stress-free journey...",
  },

  {
    id: 2,
    title: "How to maintain your health?",
    date: "17 June 2025",
    url: "/blog/health",
    imageName: healthImage,
    alt: "Health",
    text: "Traveling, whether for business or leisure, can be exciting and enriching experience. However, changes in routine, diet, environment, and time zones can take a toll on your physical...",
  },

  {
    id: 3,
    title: "Important advices for travelers",
    date: "17 2025",
    url: "/blog/advice",
    imageName: planImage,
    alt: "Advices",
    text: "Successful travel begins with thoughtful planning and smart packing. Knowing what to bring and how to prepare can make all the difference. from essential documents...",
  },
];

function Blog() {
  return (
    <div className="blog-div">
      <h1>Blog</h1>
      <div className="blog-grid">
        {blogInfo.map((blog) => (
          <section key={blog.id} className="blog-section">
            <Link className="link-image" to={blog.url}>
              <img src={blog.imageName} alt={blog.alt} />
            </Link>
            <Link to={blog.url} className="travel-link">
              {blog.title}
            </Link>
            <span className="blog-date">{blog.date}</span>
            <p className="blog-text">{blog.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Blog;
