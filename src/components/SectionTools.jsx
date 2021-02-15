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
          <div className="wrapper-square">
        <div className="square">

          
          <svg height="0" width="0">
            <defs>
              <clipPath id="svgPath">
                <path
                  id="uiRect1"
                  d="M86,83 L88,83 L88,81 L86,81 L86,83 Z M90,79 L90,85 L84,85 L84,79 L90,79 Z"
                  fill="#FFFFFF"
                  transform="translate(87.000000, 82.000000) rotate(-315.000000) translate(-87.000000, -82.000000) "
                ></path>
                <path
                  id="uiRect2"
                  d="M92,122 L93,122 L93,121 L92,121 L92,122 Z M95,119 L95,124 L90,124 L90,119 L95,119 Z"
                  fill="#FFFFFF"
                  transform="translate(92.500000, 121.500000) rotate(-315.000000) translate(-92.500000, -121.500000) "
                ></path>
                <path
                  id="uiRect3"
                  d="M125,108 L126,108 L126,107 L125,107 L125,108 Z M128,105 L128,110 L123,110 L123,105 L128,105 Z"
                  fill="#FFFFFF"
                  transform="translate(125.500000, 107.500000) rotate(-315.000000) translate(-125.500000, -107.500000) "
                ></path>
                <path
                  id="uiRect4"
                  d="M86,83 L88,83 L88,81 L86,81 L86,83 Z M90,79 L90,85 L84,85 L84,79 L90,79 Z"
                  fill="#FFFFFF"
                  transform="translate(87.000000, 82.000000) rotate(-315.000000) translate(-87.000000, -82.000000) "
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>



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
