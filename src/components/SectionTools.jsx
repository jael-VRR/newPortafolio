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
            <div className="circle1">a</div>
            <div className="circle2">b</div>
            <div className="circle3">c</div>
          </Row>
          <Row className="wrapper-circle">
            <div className="circle4">d</div>
            <div className="circle5">e</div>
            <div className="circle6">f</div>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SectionTools;
