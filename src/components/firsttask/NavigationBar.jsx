import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "../style/Style.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      className="shadow-lg navbar"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#">IhzhaNB</Navbar.Brand>
        <Navbar.Toggle
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        />
      </Container>
      <Container>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                className="nav-link active"
                aria-current="page"
                href="#home"
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link active"
                aria-current="page"
                href="#bio"
              >
                About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link active"
                aria-current="page"
                href="#projects"
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav-link active"
                aria-current="page"
                href="#contac"
              >
                Contac
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

// import Container from "./Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function NavScrollExample() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container fluid>
//         <Navbar.Brand href="#">IhzhaNB</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="justify-content-end flex-grow-1 pe-3"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#aboutMe">About Me</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#contac">Contac</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
