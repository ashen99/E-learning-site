import React from "react";
import "../styles/Categories/Category.css";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="category_title">
            <div>
              <p className="category_head">Explore courses by category</p>
              <p>
                Browse top class courses by browsing our category which will be
                more easy for you.
              </p>
            </div>
            <button className="category_button">All Category</button>
          </div>
          <div className="categories"></div>
        </div>
      </section>
    </>
  );
};

export default About;
