import React from "react";
import "../styles/Hero/Hero.css";

import HeroPic from "../assets/stdent1.png";
import course from "../assets/education.png";
import mentors from "../assets/teachings.png";
import students from "../assets/students.png";

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

          <img className="hero_image" src={HeroPic} alt="" />
        </div>
      </div>
      <div className="banner_section">
        <div className="banner">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={course}
              alt=""
              style={{ height: "50px", width: "50px", paddingRight: "10px" }}
            />
            <div>
              <h3>10k+</h3>
              <p>TOTAL COURSES</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={mentors}
              alt=""
              style={{ height: "50px", width: "50px", paddingRight: "10px" }}
            />
            <div>
              <h3>500k+</h3>
              <p>EXPERT MENTORS</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={students}
              alt=""
              style={{ height: "50px", width: "50px", paddingRight: "10px" }}
            />
            <div>
              <h3>300k+</h3>
              <p>STUDENTS GLOBALLY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
