
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap';
import './menu.css';
export default function Menu() {
  return (
    
    <Navbar expand="lg" bg='primary'>
    <Container>
      <Navbar.Brand href="#" className='cor_nav'>Sistema</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto">
            <Nav.Link href="#action1" className='cor_nav'>Clientes</Nav.Link>
            <Nav.Link href="#action2" className='cor_nav'>Atividades</Nav.Link>
        </Nav>
        <Nav>
            <NavDropdown align='end' title="Acesse" id="navbarScrollingDropdown" className='cor_nav text-white'>
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
