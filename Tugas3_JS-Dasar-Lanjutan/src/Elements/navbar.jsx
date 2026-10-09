import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router";
import "./navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" className="bookstore-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="bookstore-brand">
          <img
            src="/pagebound-logo.png"
            alt="Pagebound"
            className="pagebound-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="bookstore-navbar-nav" />
        <Navbar.Collapse id="bookstore-navbar-nav">
          <Nav className="mx-auto bookstore-nav">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/book">Book</Nav.Link>
            <Nav.Link as={NavLink} to="/team">Team</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="bookstore-auth-nav">
            <Button as={NavLink} to="/login" variant="outline-primary">Login</Button>
            <Button as={NavLink} to="/register" variant="primary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
