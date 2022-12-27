import React from "react";
import styled from "styled-components";
import HeroSection from "./component/HeroSection";
import FeatureProduct from "./component/FeatureProduct";

const Home = () => {
    const data={
        name:"Pratik Store",
    }
  return (
    <>
      <HeroSection myData={data} />
     <FeatureProduct />
    </>
  );
};

export default Home;
