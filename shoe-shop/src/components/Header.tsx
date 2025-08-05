import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import shoeLogo from "../shoe-logo.png";

const Header: React.FC = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const itemCount = items.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black py-3 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img
            src={shoeLogo}
            alt="Smooth Steps Logo"
            className="h-8 w-auto sm:h-10 lg:h-12 mr-2 sm:mr-3"
          />
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">Smooth Steps</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base ${
                    isActive
                      ? "text-red-500 font-semibold border-b-2 border-red-500"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center space-x-1 lg:space-x-2 text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base ${
                  isActive
                    ? "text-red-500 font-semibold border-b-2 border-red-500"
                    : ""
                }`
              }
            >
              <span className="text-lg lg:text-xl">🛒</span>
              <span className="bg-red-500 text-white rounded-full px-1.5 lg:px-2 py-0.5 lg:py-1 text-xs font-bold">
                {itemCount}
              </span>
              {total > 0 && (
                <span className="text-xs lg:text-sm hidden lg:inline">${total.toFixed(2)}</span>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Cart Icon */}
        <div className="md:hidden relative">
          <NavLink
            to="/cart"
            className="flex items-center space-x-1 text-white"
          >
            <span className="text-lg">🛒</span>
            <span className="bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold">
              {itemCount}
            </span>
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-white hover:text-red-500 transition-colors duration-300 py-2 text-base ${
                      isActive
                        ? "text-red-500 font-semibold border-l-4 border-red-500 pl-2"
                        : ""
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between py-2">
                <span className="text-white text-base">Cart Total:</span>
                <span className="text-red-500 font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
