import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/aboutMe.css";

function AboutMe() {
  return (
    <div>
      <Row>
        <Col className="info-section">
          <div className="wrapper-info">
						<div className="info-title">
            <h2>Perfil profesional</h2>
						</div>
						<div className="wrapper-text">
						<p classname="text-info">We’ve been working with the teams around the world.</p>
				    </div>
          </div>
					
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
