import React from "react";
import "../styles/Testomonials/Testomonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "@mui/material/Card";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import avatar1 from "../assets/boy.png";
import avatar2 from "../assets/man.png";
import avatar3 from "../assets/girl.png";
import quotes from "../assets/double-quotes.png";

const Testomonials = () => {
  const testomials = [
    {
      id: 1,
      title: "Great app",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      avatar: avatar1,
      name: "Jhon Doe",
    },
    {
      id: 2,
      title: "Great app",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      avatar: avatar2,
      name: "Jhon Doe",
    },
    {
      id: 3,
      title: "Great app",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      avatar: avatar3,
      name: "Jhon Doe",
    },
    {
        id: 3,
        title: "Great app",
        description:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        avatar: avatar3,
        name: "Jhon Doe",
      },
      {
        id: 3,
        title: "Great app",
        description:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        avatar: avatar3,
        name: "Jhon Doe",
      },
      {
        id: 3,
        title: "Great app",
        description:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        avatar: avatar3,
        name: "Jhon Doe",
      },
      {
        id: 3,
        title: "Great app",
        description:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        avatar: avatar3,
        name: "Jhon Doe",
      },
      {
        id: 3,
        title: "Great app",
        description:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        avatar: avatar3,
        name: "Jhon Doe",
      },
  ];

  return (
    <>
      <section>
        <div className="test_container">
          {/* tiitle */}
          <div className="testomonial_title">
            <p className="testomonial_head">
              What our students are<br></br> saying about us
            </p>
            <p className="testomonial_about">
              You learn today and earn tomorrow. The roots of education are
              bitter but the fruits are sweet. if you learn today you can lead
              tomorrow. See what our students are saying.
            </p>
          </div>

          {/* testomonials */}
          <div className="testomonials">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                881: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                1067: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                1300: {
                    slidesPerView: 3,
                    centeredSlides: true,

                }
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testomials.map(({ id, title, description, avatar, name }) => (
                <SwiperSlide key={id}>
                  <Card className="test_card" sx={{ maxWidth: 345 }}>
                    <div className="test_card_title">
                      <h4>{title}</h4>
                    </div>
                    <div className="test_card_text">
                      <img
                        src={quotes}
                        alt="quoatation-marks"
                        className="quotationMarks"
                      />
                      <p>{description}</p>
                    </div>
                    <hr style={{ color: "black"}}></hr>
                    <div className="test_image">
                      <img src={avatar} alt="" className="avatar" />
                      <p>{name}</p>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testomonials;
