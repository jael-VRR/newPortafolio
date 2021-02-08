
import { Fragment } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import hero1 from "../images/hero-girl.png";
import "../styles/projects.css";

function Projects() {
  return (
    <Fragment>
      <Row>
        <Col className="home-projects">
          <div className="container-text">
            <h2>Projects</h2>
          </div>
          <div className="container-projects">
						<div className="container-card">
            <Card>
              <Card.Img variant="top" src={hero1} alt="try" style={{width:"100px"}}/>
              <Card.Body>
                <Card.Title>Redesigning Crisp.im</Card.Title>
                <Card.Text>
								Illustration, Web Design
                </Card.Text>
                <Button variant="se">view project</Button>
              </Card.Body>
            </Card>
						</div>
          </div>
          <div className="container-projects">
						<div className="container-card">
            <Card>
              <Card.Img variant="top" src={hero1} alt="try" style={{width:"100px"}}/>
              <Card.Body>
                <Card.Title>Redesigning Crisp.im</Card.Title>
                <Card.Text>
								Illustration, Web Design
                </Card.Text>
                <Button variant="se">view project</Button>
              </Card.Body>
            </Card>
						</div>
          </div>
          <div className="container-projects">
						<div className="container-card">
            <Card>
              <Card.Img variant="top" src={hero1} alt="try" style={{width:"100px"}}/>
              <Card.Body>
                <Card.Title>Redesigning Crisp.im</Card.Title>
                <Card.Text>
								Illustration, Web Design
                </Card.Text>
                <Button variant="se">view project</Button>
              </Card.Body>
            </Card>
						</div>
          </div>
        </Col>
      </Row>
      
    </Fragment>
  );
}

export default Projects;
