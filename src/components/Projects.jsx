import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1>My Projects</h1>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          {/* Project1 */}
          <Col md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, ex! Fugit, vel ad. Ducimus veniam repellendus cum,
                  maiores totam, deserunt doloremque est, dicta voluptatibus
                  earum provident excepturi accusantium maxime nemo?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Project2 */}
          <Col md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://toggl.com/blog/wp-content/uploads/2021/05/how-to-create-a-website-project-plan.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, ex! Fugit, vel ad. Ducimus veniam repellendus cum,
                  maiores totam, deserunt doloremque est, dicta voluptatibus
                  earum provident excepturi accusantium maxime nemo?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Project3 */}
          <Col md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://nickjanetakis.com/assets/blog/cards/how-to-start-and-finish-any-web-app-project-678900795cfd6d4fa60e3655dd62ae9f61ef5e14b62ca62050e817e43e861f11.jpg"
                class="card-img-top"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, ex! Fugit, vel ad. Ducimus veniam repellendus cum,
                  maiores totam, deserunt doloremque est, dicta voluptatibus
                  earum provident excepturi accusantium maxime nemo?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Project4 */}
          <Col md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.nopio.com/wp-content/uploads/2016/05/web-development.jpg"
                class="card-img-top"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, ex! Fugit, vel ad. Ducimus veniam repellendus cum,
                  maiores totam, deserunt doloremque est, dicta voluptatibus
                  earum provident excepturi accusantium maxime nemo?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Project5 */}
          <Col md={4} className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://hackr.io/blog/best-web-development-projects/thumbnail/large"
              />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, ex! Fugit, vel ad. Ducimus veniam repellendus cum,
                  maiores totam, deserunt doloremque est, dicta voluptatibus
                  earum provident excepturi accusantium maxime nemo?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
