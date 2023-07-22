
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap';
export default function Menu() {
  return (
    
    <Navbar expand="lg" bg='light'>
    <Container>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto">
            <Nav.Link href="#action1">Clintes</Nav.Link>
            <Nav.Link href="#action2">Atividades</Nav.Link>
        </Nav>
        <Nav>
            <NavDropdown align='end' title="Acesse" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Acesse</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Something else here
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
