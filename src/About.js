import React from "react";

import HeroSection from "./component/HeroSection";
import {  useProductContext } from "./context/productcontext";

const About = () =>{

    
    const {myName}=useProductContext();
    const data={
        name:"Pratik Ecommerce",
    }
    return (
        <>
         {myName}
        <HeroSection  myData={data}/>
        </>
    );
};

export default About;