import React from "react";
import "../styles/Categories/Category.css";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";

import designImg from "../assets/front-development.png";
import marketing from "../assets/promotion.png";
import consult from "../assets/consult.png";
import digitalMarketing from "../assets/advertisig.png";
import finance from "../assets/accounting.png";
import selffev from "../assets/user.png";

const About = () => {
  const categories = [
    {
      id: 1,
      title: "Design & Development",
      about: "250+ courses available",
      image: designImg,
      bgColor: "#9eb8ff"
    },
    {
      id: 2,
      title: "Marketing & Communication",
      about: "300+ courses available",
      image: marketing,
      bgColor: "#001c69"
    },
    {
      id: 3,
      title: "Digital Marketing",
      about: "150+ courses available",
      image: digitalMarketing,
      bgColor: "#ffaf90"
    },
    {
      id: 4,
      title: "Business & Consulting",
      about: "150+ courses available",
      image: consult,
      bgColor: "#ff9090"
    },
    {
      id: 5,
      title: "Finance Management",
      about: "170+ courses available",
      image: finance,
      bgColor: "#f1baff"
    },
    {
      id: 6,
      title: "Self Development",
      about: "50+ courses available",
      image: selffev,
      bgColor: "#a6ffc1"
    },
  ];

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
          <div className="categories">
            <Grid container spacing={3} >
              {categories.map(({id, image, title, about, bgColor}) => (
                <Grid xs={12} sm={6} md={4} key={id}>
                  <Card
                    className="category_card"
                  >
                    <div className="category_image"  style={{backgroundColor: bgColor}}>
                      <img src={image} alt="" className="designImage" />
                    </div>
                    <div className="category_card_text">
                      <h3>{title}</h3>
                      <p>{about}</p>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;