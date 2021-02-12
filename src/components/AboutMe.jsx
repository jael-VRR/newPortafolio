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
              <p className="text-info">
                 Mi formación profesional es de Administradora,
                 y mi especialización en el mundo de la
                tecnología es Front End Developer egresada de Laboratoria
                . Me encanta
                aprender, innovar, codear y viajar. Vivo en Lima, Perú..
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
