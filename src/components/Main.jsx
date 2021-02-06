
import { Fragment } from "react";
import { Row, Col, Figure} from "react-bootstrap";
import hero1 from "../images/hero-girl.png";
import hero2 from "../images/hero-guy-2.png";
import hero3 from "../images/hero-guy-3.png";
import hero4 from "../images/hero-guy-1.png";
import Btn from "./BtnContact.jsx";
import SectionTools from "./SectionTools.jsx";
import "../styles/main.css";


function Main() {
  return (
    <Fragment>
      <Row className="hero-overlay">
        <Col>
          <Figure>
            <Figure.Image className="hero-image" src={hero2} alt="hero2" />
          </Figure>
        </Col>
        <Col>
          <Figure>
            <Figure.Image className="hero-image" src={hero1} alt="hero1" />
          </Figure>
        </Col>
      </Row>
      <Row className="hero-container">
        <Col>
          <h1>I'AM JAEL RODRÍGUEZ</h1>
          <p>Front end Developer</p>
					<div  className="wrapper-button">
          <Btn/>
					</div>
        </Col>
      </Row>
      <Row >
        <Col>
          <Figure>
            <Figure.Image className="hero-image2" src={hero3} alt="hero1" />
          </Figure>
          <img className="hero-cover" src={hero4} alt="hero4" />
        </Col>
      </Row>
		  <SectionTools/>
    </Fragment>
  );
}

export default Main;
