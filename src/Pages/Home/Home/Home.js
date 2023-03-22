import React from "react";
import useTitle from "../../../hooks/useTitle";
import Categories from "../Categories/Categories";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mx-5 mt-5">
      <Categories></Categories>
    </div>
  );
};

export default Home;
