import React from "react";
import { Row, Col, Figure, Nav } from "react-bootstrap";
import logo from "../images/logo-light.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <Row className="wrapper-navbar">
        <Col>
          <Figure>
            <Figure.Image className="nav-logo fluid" src={logo} alt="logo" />
          </Figure>
        </Col>
        <Col>
          <Nav>
            <Nav.Link className="item-nav" >
              Home
            </Nav.Link>
            <Nav.Link className="item-nav" >
              Blog
            </Nav.Link>
            <Nav.Link className="item-nav" >
              Contact
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
