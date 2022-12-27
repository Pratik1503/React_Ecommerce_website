import React from "react";
import Home from "./Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./About"
import Contact from './Contact'
import Cart from "./Cart"
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import Error from "./Error"
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {

  const theme={
    colors:{
      white:"#fff",
      black:"#212529",
      text:"rgba(29,29,29,.8)",
      bg:"#F6F8FA",
      helper:"#8490ff",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 283)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",

    },

    media:{
      mobile:"768px",
      tab:"998",
    }

  };


  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/products" element={<Products />}  />
        <Route path="/singleproduct/:id" element={<SingleProduct />}  />
        <Route path="/cart" element={<Cart />}  />
        <Route path="*" element={<Error />}  />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
};

export default App;
