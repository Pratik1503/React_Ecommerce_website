import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header=()=>{

    return (
      <MainHeader>
        <NavLink>
            <img src="./images/store1.png" alt=" my logo" />
        </NavLink>

        <Nav />
      </MainHeader>
    
    )
};

const MainHeader=styled.header`
   display:flex;
   width:100%;
   height:auto;
   background:${({theme})=> theme.colors.bg};
   justify-content:space-between;
   align-items:center;
   padding:0 4.8rem;
   position:relative;

   .logo{
    height:5rem;
   }

`;

export default Header;

