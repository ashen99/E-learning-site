import React, { useState } from "react";
import "../styles/NavbarStyles/Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    console.log("clicked");
    setNav(!nav);
  };

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile_navbar ${nav ? "open-nav" : ""}`}>
        <div className="mobile_navbar__close">
          <IoClose onClick={openNav} />
        </div>

        <ul className="mobile_navbar__links">
          <li>Home</li>
          <li>Courses</li>
          <li>Mentors</li>
          <li>About</li>
        </ul>
      </div>

      {/* web */}
      <div className="navbar">
        <div className="logo">
          <h3>
            <span style={{ color: "#4540E1" }}>Q</span>-B
            <span style={{ color: "#4540E1" }}>ee</span>
          </h3>
        </div>
        <div className="items">
          <ul>
            <li>Home</li>
            <li>Course</li>
            <li>Mentors</li>
            <li>About</li>
          </ul>
        </div>
        <div className="navbar_buttons">
          <button className="signInBtn">Sign in</button>
          <button className="registerBtn">Register</button>
        </div>

        {/* mobile */}
        <div className="mobile-hamb">
          <GiHamburgerMenu onClick={openNav} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
