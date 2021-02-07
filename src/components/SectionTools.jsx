import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/sectionTools.css";

function SectionTools() {
  return (
    <Fragment>
      <Row>
        <Col className="home-services">
          <div className="container-text">
            <h2>What We Do</h2>
          </div>

          <Row className="wrapper-circle">
            <div className="circle">hola</div>
            <div className="circle">hola</div>
            <div className="circle">hola</div>
          </Row>

          <Row className="wrapper-circle">
            <div className="circle">hola</div>
            <div className="circle">hola</div>
            <div className="circle">hola</div>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SectionTools;
