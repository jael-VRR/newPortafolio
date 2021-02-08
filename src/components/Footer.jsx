import React from "react";
import { Button } from "react-bootstrap";
import banner from "../images/footer-pattern-bg-lg.png";
import mask from "../images/footer-white-mask.png";
import mask1 from "../images/footer-white-mask-lg.png";
import '../styles/footer.css';

function Footer() {
  return (
      <div>
      <div className="capa2">
        <img className="default" src={mask} alt="mask"/>
        <img className="default1"  src={mask1} alt="mask1"/>
        <img className="cover2" src={banner} alt="cover1" />
     
      </div>
      <div className="footer-text">
           <p>Interested to work with us?</p>
           <Button class="btn btn-primary btn-talk" data-toggle="modal" data-target="#contactModal">Let's talk!</Button>
        </div>
      </div>

  );
}

export default Footer;
