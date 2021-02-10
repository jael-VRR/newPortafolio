import { Fragment } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import social from "../images/social.png";
import cover3 from "../images/work-pattern.png";
import "../styles/projects.css";

function Projects() {
  return (
    <Fragment>
    <div className="home-projects">
      <div className="home-container">
        <div className="projects-section">
          <div className="section-title">
          <h2>Projects</h2>
           <div className="works-container">
             <Row  className="content">
               <div>
                 <h3>Redesigning Crisp.im</h3>
                 <p>Illustration, Web Design</p>
                 <Button variant="se">view project</Button>
               </div>
               <div>
               <Card>
              <Card.Img variant="top" src={social} alt="try" style={{width:"300px"}}/>
            </Card>
               </div>
             </Row>

           </div>

          </div>

        </div>
     
      </div>
    
    </div>
    </Fragment>
  );
}

export default Projects;
