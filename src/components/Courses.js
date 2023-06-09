import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import "../styles/Courses/Courses.css";

import webdevelop from "../assets/webdevelop.png"
import cmsdevelop from "../assets/cmsdevelop.png"
import mobiledevelop from "../assets/mobiledevelopment.png"
import drawing from "../assets/drawing.png"
import videography from "../assets/videography.png"
import motiongraphics from "../assets/motion.jpg"
import user from "../assets/user (3).png"
import dollor from "../assets/dollar.png"
import star from "../assets/star.png"


const Courses = () => {
    const courses = [
        {
            id: 1,
            tag: "Web Design",
            title: "Learn app development in 30 days",
            image: mobiledevelop,
            userValue: "500k +",
            starValue: "4.9",
            prizeValue: "$105.00"
        },
        {
            id: 2,
            tag: "Graphics Design",
            title: "Advance motion graphics",
            image: motiongraphics,
            userValue: "500k +",
            starValue: "4.0",
            prizeValue: "$99.00"
        },
        {
            id: 3,
            tag: "Web Design",
            title: "Learn CMS Development",
            image: cmsdevelop,
            userValue: "200k +",
            starValue: "4.5",
            prizeValue: "$120.00"
        },
        {
            id: 4,
            tag: "Web Design",
            title: "The Complete Web Design course",
            image: webdevelop,
            userValue: "600k +",
            starValue: "4.6",
            prizeValue: "$130.00"
        },
        {
            id: 5,
            tag: "Art",
            title: "Advance Drawing",
            image: drawing,
            userValue: "100k +",
            starValue: "3.6",
            prizeValue: "$80.00"
        },
        {
            id: 6,
            tag: "Media",
            title: "Advance videography course",
            image: videography,
            userValue: "400k +",
            starValue: "4.2",
            prizeValue: "$90.00"
        },
    ]
  return (
    <section>
      <div className="container">
        <div className="course_container">
          <div className="course_title">
            <div>
              <p className="course_head">Popular courses for you</p>
              <p>
                Get the best course with the best price with world-class tutors.
              </p>
            </div>
            <button className="course_button">See All Jobs</button>
          </div>
          <div className="courses">
          <Grid container spacing={3} >
            {courses.map(({id, image, title, tag, userValue, starValue, prizeValue}) => (
                <Grid xs={12} sm={6} md={4} key={id}>
                  <Card className="course_card">
                    <div className="course_image">
                      <img src={image} alt="" className="courseImage" />
                    </div>
                    <div className="course_tag">
                        <p>{tag}</p>
                    </div>
                    <div className="course_card_text">
                      <h3>{title}</h3>
                    </div>
                    <div className="course_stats">
                        <img src={user} alt="" className="course_stat_image"/>
                        <p>{userValue}</p>
                        <img src={star} alt="" className="course_stat_image" />
                        <p>{starValue}</p>
                        <img src={dollor} alt="" className="course_stat_image" />
                        <p>{prizeValue}</p>
                    </div>
                  </Card>
                </Grid>
            ))} 
            </Grid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
