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
					<Col>
			<div className="circle">hola1</div>
			<div className="circle">hola1</div>
			<div className="circle">hola1</div>
			<div className="circle">hola1</div>
			<div className="circle">hola1</div>
			<div className="circle">hola1</div>
				</Col>
				<Col>
				<div id="a">
				
				</div>
				</Col>
				<Col><div>hola3</div></Col>
					
        </Col>
			
      </Row>
		
    </Fragment>
  );
}

export default SectionTools;
