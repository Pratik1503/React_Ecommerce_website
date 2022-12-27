import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({myData}) => {
    const{name}=myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ipsa provident eius magni ratione qui vero quos ullam sint nobis
              minus assumenda et in aliquam sapiente, repellendus fugiat ab eum.
            </p>
          
                <NavLink to="/products">
                    <Button>Shop Now</Button>
                </NavLink>
           
           {/* Home page image */}
          </div>
           <div className="hero-section-image">
            <figure>
                <img src="images/hero.jpg " alt="hero-section-image" className="img-style"/>
            </figure>
           </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding:12rem 0;
.grid-two-column{
    grid-template-columns:repeat(2,1fr);
}

img{
    min-width:10rem;
    height:10rem;
}

.intro-data{
    margin-bottom:0;
}

.hero-section-data{
p{
    margin:2rem 0;
}
h1{
    font-weight:bold;
}

}

.img-style{
    width:100%;
    height:auto;
}

figure{
    position:relative;

    &::after{
        content:"";
        width:60%;
        height:80%;
        background-color:rgba(81,56,238,0.4);
        position:absolute;
        left:50%;
        top:-5rem;
        z-index:-1;
    }
}


@media(max-width:${({theme})=>theme.media.mobile}){
    .grid{
        gap:10rem;
    }

    figure::after{
        content:"";
        width:50%;
        height:100%;
        left:0;
        top:10%;
        background-color:rgba(81,56,238,0.4);
    }
}




`;

export default HeroSection;
