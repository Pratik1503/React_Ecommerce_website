import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started</h3>
            <h3>Talk To Us Today</h3>
          </div>

          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className=" grid grid-four-column footer">
          <div className="footer-about">
            <h3>Pratik Nimbalkar</h3>
            <p>
              Lorem ipsum in the japanese style mein sun jo bolega abhi mere se
              ek do tin minute mein tu kya bolta be sun mere ko mein jo bolega
            </p>
          </div>

          <div className="footer-subscribe">
            <h3> Subscribe to get important updates </h3>
            <form action="#">
              <input type="email" placeholder="Enter Your E-mail" />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
                <div>
                  <a href="https://www.instagram.com/pratik_nimbalkar_official/">
                     <FaInstagram  className="icons"/>
                  </a>     
                </div>
                <div>
                <a href="https://www.linkedin.com/in/pratik-nimbalkar-497265225/    ">
                     <FaLinkedin  className="icons"/>
                  </a>  
                </div>
                <div>
                <a href="https://github.com/Pratik1503">
                     <FaGithub className="icons"/>
                  </a>  
                </div>
               
            </div>

          
          
          </div>

          <div className="footer-contact">
            <h3> Call Us </h3>
            <a href="tel:+917057502498"> 1234567890 </a>
          </div>

        </div>

        {/* Bottom footer */}

        <div className="footer-bottom--section ">
            <hr/>
            <div className="flex">
            <div className="grid grid-two-column ">
             <p>@{new Date().getFullYear()} Pratik Ecommerce. All Rights Reserved</p>
            </div>

            <div>
                <p>PRIVACY AND POLICY.</p>
                <p>TERMS AND CONDITIONS.</p>
            </div>
            </div>
        </div>

      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    
    
    
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    .flex{
        display:flex;
    }
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

`;

export default Footer;
