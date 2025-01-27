import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // *Mobile Navbar Toggle Functionality
  const [menuToggle, setMenuToggle] = useState(false);

  // *Handle Navbar Display Toggle
  const toggleVisibility = () => {
    setMenuToggle(!menuToggle);
  };

  // *Indicate Active route in the Navbar
  const navLinkActiveStatus = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive && "4px solid black",
    };
  };

  // *Handle Active Home Navbar Background
  const [home, setHome] = useState(true);
  const activeHome = (state) => {
    setHome(state);
  };

  return (
    <div
      className={`max-w-screen-2xl mx-auto p-4 ${
        home && "bg-[#9538E2] text-white"
      }`}
    >
      <div className="">
        <nav className="flex justify-between items-center ">
          {/* Web Title */}
          <div className="font-bold text-2xl">Gadget Heaven</div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex justify-center gap-4 text-lg">
            <NavLink
              onClick={() => activeHome(true)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/statistics"
            >
              Statistics
            </NavLink>

            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/dashboard"
            >
              Dashboard
            </NavLink>

            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/profile"
            >
              My Profile
            </NavLink>
          </div>
          {/* Icons */}
          <div className="hidden md:flex items-center gap-4 text-lg">
            {/* Cart Icon */}
            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavLink>
            {/* Wishlist Icon */}
            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </NavLink>
          </div>
          {/* Navigation Icon For Mobile Version */}
          <div className="flex md:hidden">
            <Link
              className="flex items-center gap-2"
              onClick={toggleVisibility}
            >
              {/* Hamburger Icon */}
              {menuToggle === false && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {/* Close Icon */}
              {menuToggle === true && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </Link>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation & Icons*/}
      <div style={{ display: menuToggle === false ? "none" : "block" }}>
        <div className="flex flex-col gap-2 max-w-screen-2xl mx-auto p-4 md:hidden text-lg">
          {/* Mobile Navigation Links */}
          <NavLink
            onClick={() => activeHome(true)}
            style={navLinkActiveStatus}
            className="navigation-pane"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => activeHome(false)}
            style={navLinkActiveStatus}
            className="navigation-pane"
            to="/statistics"
          >
            Statistics
          </NavLink>

          <NavLink
            onClick={() => activeHome(false)}
            style={navLinkActiveStatus}
            className="navigation-pane"
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink
            onClick={() => activeHome(false)}
            style={navLinkActiveStatus}
            className="navigation-pane"
            to="/profile"
          >
            My Profile
          </NavLink>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavLink>
            {/* Wishlist Icon */}
            <NavLink
              onClick={() => activeHome(false)}
              style={navLinkActiveStatus}
              className="navigation-pane"
              to="/wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
