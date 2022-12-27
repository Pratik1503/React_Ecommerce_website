import React, { useState } from "react";
import { icons } from "react-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {

  const[menuIcon,setMenuIcon]=useState(0);
  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-item: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          font-size: 1.8rem;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background: transparent;
      cursor: pointer;
      border: none;
    }
    ${
      "" /*cross button      */
    }

    .close-outline{
      display:none;
    }


    
    @media(max-width:${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        border: ${({ theme }) => theme.colors.black};
        z-index: 9999;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transform: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size:4.2 rem;
        }
      }
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        postion: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        border-radius: 50%;
        color: #000;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background: ${({ theme }) => theme.colors.helper};
      }
    }
  `;
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" :"navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink className="navbar-link  home-link" onClick={()=>setMenuIcon(false)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link  about-link" onClick={()=>setMenuIcon(false)} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link  contact-link" onClick={()=>setMenuIcon(false)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link  products-link" onClick={()=>setMenuIcon(false)} to="/Products">
              Products
            </NavLink>
          </li>
          <li>
            <button className="navbar-button">
              <NavLink className="navbar-link  login-link" onClick={()=>setMenuIcon(false)} to="/">
                Login
              </NavLink>
            </button>
          </li>

          <li>
            <NavLink className="navbar-link cart-trolley--link " onClick={()=>setMenuIcon(false)} to="/cart">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={()=>setMenuIcon(true)}/>
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline" onClick={()=>setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
