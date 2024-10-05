import React from "react";
import { Hero } from "../components/Home/Hero";
import { Categories } from "../components/Home/Categories";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
};

export { Home };
