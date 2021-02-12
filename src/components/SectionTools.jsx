import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/sectionTools.css";


function SectionTools() {
  return (
    <Fragment>
      <Row>
        <Col className="home-services">
          <div className="container-text">
            <h2>Habilidades</h2>
          </div>
          <Row className="wrapper-circle">
            <div className="icon-mask">
   

           
              <div className="circle1">
                <div className="social1-icon">
                
                  <i className="fab fa-js-square"></i>
                </div>
              </div>
              <div className="text-tools">JAVASCRIPT</div>         
            </div>

            <div>
              <div className="circle2">
                <div className="social1-icon">
                  <i className="fab fa-node-js"></i>
                </div>
              </div>
              <div className="text-tools">NODE JS</div>
            </div>
            <div>
              <div className="circle3">
                <div className="social1-icon">
                  <i className="fab fa-react"></i>
                </div>
              </div>
              <div className="text-tools">REACT</div>
            </div>
          </Row>

          <Row className="wrapper-circle">
            <div>
              <div className="circle4">
                <div className="social1-icon">
                  <i className="fab fa-html5"></i>
                </div>
              </div>
              <div className="text-tools">HTML5</div>
            </div>

            <div>
              <div className="circle5">
                <div className="social1-icon">
                  <i className="fab fa-css3"></i>
                </div>
              </div>
              <div className="text-tools">CSS3</div>
            </div>
            <div>
              <div className="circle6">
                <div className="social1-icon">
                  <i className="fab fa-github-alt"></i>
                </div>
              </div>
              <div className="text-tools">GITHUB</div>
            </div>
          </Row>

          <Row className="wrapper-circle">
            <div>
              <div className="circle3">
                <div className="social1-icon">
                  <i className="fab fa-figma"></i>
                </div>
              </div>
              <div className="text-tools">FIGMA</div>
            </div>

            <div>
              <div className="circle2">
                <div className="social1-icon">
                  <i className="fab fa-sass"></i>
                </div>
              </div>
              <div className="text-tools">SASS</div>
            </div>

            <div>
              <div className="circle1">
                <div className="social1-icon">
                  <i className="fab fa-bootstrap"></i>
                </div>
              </div>
              <div className="text-tools">BOOTS</div>
            </div>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SectionTools;
