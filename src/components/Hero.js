import React from "react";
import "../styles/Hero/Hero.css";

import HeroPic from "../assets/heroPic.png";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_content">
          <div className="hero_content_text">
            <p className="hero_content_text_title">
              Getting <span style={{ color: "#4540E1" }}>Quality</span>{" "}
              Education is Now More Easy
            </p>
            <p className="hero_content_text_p">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className="hero_content_buttons">
              <button className="hero_content_buttons_btn_1">
                Get Started
              </button>
              <button className="hero_content_buttons_btn_2">
                Get free trial
              </button>
            </div>
          </div>

          <img src={HeroPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
