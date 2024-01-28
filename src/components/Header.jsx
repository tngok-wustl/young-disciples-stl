import { Container, Nav, Navbar } from "react-bootstrap"

function Header() {
  return (
    // expand: collapse navbar at lower breakpoints
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src="src/assets/Young_Disciples_Logo.png" width={250} alt="YD Logo"></img>
        </Navbar.Brand>

        {/* collapsable navbar (via aria-controls) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* navbar links */}
          <Nav className="ms-auto">
            <Nav.Link>Bible studies</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Grace sharing</Nav.Link>
            <Nav.Link>About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
