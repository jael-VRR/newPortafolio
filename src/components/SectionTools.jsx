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
        </Col>
      </Row>
    </Fragment>
  );
}

export default SectionTools;
