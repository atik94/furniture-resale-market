import React from "react";
import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mx-5 mt-5">
      <Banner></Banner>
      <Categories></Categories>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
