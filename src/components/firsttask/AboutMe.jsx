import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Style.css";

function AboutMe() {
  return (
    <div id="aboutMe">
      <Container className="text-light">
        <Row className="text-center mb-3">
          <Col>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row className="justify-content-center fs-5 text-center">
          <Col className="md-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, cum. Quas nihil sit assumenda exercitationem vel
              deserunt cum optio numquam porro aliquid quos, itaque voluptatibus
              dicta quasi at iure vero!
            </p>
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffe6aa"
          fill-opacity="1"
          d="M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,197.3C560,171,640,149,720,160C800,171,880,213,960,208C1040,203,1120,149,1200,117.3C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default AboutMe;
