import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoJpg from "../logo.jpg";
import "../styles/index.css";
import "../styles/responsiveStyles/index.css";

const linksList = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Tours", url: "/tours" },
  { id: 4, text: "Blog", url: "/blog" },
  { id: 5, text: "Contact", url: "/contact" },
];

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="logo" src={logoJpg} alt="Logo" />
        </Link>
      </div>

      <div className="main-menu">
        <ul className="links-list">
          {linksList.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className={pathname === link.url ? "active" : ""}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
/***************/
