import { Container, Nav, Navbar } from "react-bootstrap"

function Header() {
  return (
    // expand: collapse navbar at lower breakpoints
    <Navbar expand='lg' className='bg-body-tertiary' fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="src/assets/Young_Disciples_Logo.png" width={250} alt="YD Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

        {/* navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Bible studies</Nav.Link>
            <Nav.Link>Get involved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
