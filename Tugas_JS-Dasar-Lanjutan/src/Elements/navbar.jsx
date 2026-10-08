import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          CodeSpace
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#contact">Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;