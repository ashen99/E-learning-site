import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Testomonials from "../components/Testomonials";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Testomonials />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
