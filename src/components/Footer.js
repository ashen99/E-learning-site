import React from "react";
import "../styles/Footer/Footer.css";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <section>
        <div className="footer">
          <div className="footer_content">
            <div className="col1">
              <h1>Q-Bee</h1>
              <p>
                No 21A 1/1 NewLane, NewRoad <br></br>colombo-06<br></br>Srilanka
              </p>
              <div className="socials">
                <img
                  className="facebook"
                  src={facebook}
                  alt="facebook"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={twitter}
                  alt="twitter"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src={linkedin}
                  alt="linkedn"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
            <div className="col2">
              <h1>Links</h1>
              <p>Home</p>
              <p>About Us</p>
              <p>Our Process</p>
              <p>Services</p>
            </div>
            <div className="col3">
              <h1>Community</h1>
              <p>Go Premium</p>
              <p>Team Plans</p>
              <p>Refer a Friend</p>
              <p>Gift Cards</p>
            </div>
            <div className="col4">
              <h1>Resources</h1>
              <p>Support</p>
              <p>Latest Updates</p>
              <p>Updates Newsletter</p>
              <p>Flow Management</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="copyrights">
          <p>Copyrights Q-Bee 2023 All right Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
