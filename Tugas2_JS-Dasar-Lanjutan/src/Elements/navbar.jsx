import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
import "./navbar.css";


function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          CodeSpace
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "fw-bold text-primary" : ""
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/team"
              className={({ isActive }) =>
                isActive ? "fw-bold text-primary" : ""
              }
            >
              Team
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "fw-bold text-primary" : ""
              }
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "fw-bold text-primary" : ""
              }
            >
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;