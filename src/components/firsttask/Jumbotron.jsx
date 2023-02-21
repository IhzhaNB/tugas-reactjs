import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ihzhaImage from "../assets/img/ihzha.jpg";
import "../style/Style.css";

function Jumbotron() {
  return (
    <div className="jumbotron" id="home">
      <Container className="text-center">
        <Row>
          <Col>
            <Image
              src={ihzhaImage}
              alt="Ihzha"
              style={{ width: "200px" }}
              roundedCircle
              thumbnail
            />
            <h1 className="display-4">Ihzha Nauval Baihaqqi</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto beatae placeat possimus! Qui vero blanditiis
              dignissimos magnam? Obcaecati labore aut ipsam ex nulla, sapiente,
              illo recusandae quidem nam ea perferendis.
            </p>
          </Col>
        </Row>
      </Container>
      <svg id="bio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,197.3C560,171,640,149,720,160C800,171,880,213,960,208C1040,203,1120,149,1200,117.3C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Jumbotron;
