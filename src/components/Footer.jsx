import React from "react";

import banner from "../images/footer-pattern-bg-lg.png";
import mask from "../images/footer-white-mask.png";
import mask1 from "../images/footer-white-mask-lg.png";
import BtnContactFooter from "./BtnContactFooter.jsx";
import "../styles/footer.css";


function Footer() {
  return (
    <div>
      <div className="capa2">
        <img className="default" src={mask} alt="mask" />
        <img className="default1" src={mask1} alt="mask1" />
        <img className="cover2" src={banner} alt="cover1" />
      </div>
      <div className="footer-text">
        <p className="title">Interested to work with us?</p>
        <BtnContactFooter/>
        <div className="contenedor-icon">
          <div className="social-icon">
            <a href="https://drive.google.com/file/d/1MZuYmfJMxcE6S0PHibYdTczvb6zj2TSt/view?usp=sharing">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://github.com/jael-VRR">
              <i className="fab fa-github-alt"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/jaelrodr%C3%ADguez/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
