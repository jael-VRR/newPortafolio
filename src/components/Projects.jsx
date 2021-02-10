import { Fragment } from "react";
import { Row, Button } from "react-bootstrap";
import solicitud from "../images/solicitud.png";
import social from "../images/social.png";
import sociales from "../images/sociales.png";
import burguer from "../images/burguer.png";
import seguro from "../images/seguro.png";
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
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Data Lovers</h3>

                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>
                  <div className="right">
                    <img src={solicitud} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Red social</h3>
                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>
                  <div className="right">
                    <img src={sociales} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Burger Queen</h3>
                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>

                  <div className="right">
                    <img src={burguer} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Homar</h3>
                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>

                  <div className="right">
                    <img src={seguro} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Maya-clientes</h3>
                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>
                  <div className="right1">
                    <img src={social} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Reducer</h3>
                      <p>Illustration, Web Design</p>
                      <Button variant="se">view project</Button>
                    </div>
                  </div>
                  <div className="right">
                    <img src={social} alt="try" style={{ width: "300px" }} />
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
