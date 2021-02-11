import { Fragment } from "react";
import { Row} from "react-bootstrap";
import solicitud from "../images/solicitud.png";
import sociales from "../images/sociales.png";
import burguer from "../images/burguer.png";
import seguro from "../images/seguro.png";
import chat from "../images/chat.png";
import nube from "../images/nube.png";
import "../styles/projects.css";

function Projects() {
  return (
    <Fragment>
      <div className="home-projects">
        <div className="home-container">
          <div className="projects-section">
            <div className="section-title">
              <h2>Mis proyectos</h2>
              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Data Lovers</h3>

                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button1" href="https://github.com/jael-VRR/LIM012-data-lovers">view project</a>
                    </div>
                  </div>
                  <div className="right">
                    <img  src={solicitud} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content1">
                  <div className="left">
                    <div className="works-description">
                      <h3>Red social</h3>
                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button2" href="https://github.com/jael-VRR/LIM012-data-lovers">view project</a>
                  
                    </div>
                  </div>
                  <div className="right1">
                    <img src={sociales} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Burger Queen</h3>
                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button3" href="https://github.com/jael-VRR/LIM012-fe-burger-queen">view project</a>
                     
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
                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button1" href="https://github.com/jael-VRR/Homar/tree/jael">view project</a>
                     
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
                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button2" href="https://github.com/jael-VRR/Homar/tree/jael">view project</a>
                   
                    </div>
                  </div>
                  <div className="right">
                    <img src={chat} alt="try" style={{ width: "300px" }} />
                  </div>
                </Row>
              </div>

              <div className="works-container">
                <Row className="content">
                  <div className="left">
                    <div className="works-description">
                      <h3>Reducer</h3>
                      <p className="text-project">Illustration, Web Design</p>
                      <a className="button3" href="https://tgp-legal.web.app/">view project</a>
                    </div>
                  </div>
                  <div className="right">
                    <img src={nube} alt="try" style={{ width: "300px" }} />
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
