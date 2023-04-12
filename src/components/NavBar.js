import {Nav, Navbar, Container} from 'react-bootstrap';  
import "./NavBar.css"
const NavBar = () => {
  return (
    <>
      <Navbar className="custom-navbar" style={{ backgroundColor: '#9F73AB'}} expand="md">  
    <Container>  
      <Navbar.Brand href="#home">HEY ✌❤</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link 
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#61dafb')}
                onMouseLeave={(e) => (e.target.style.color = '')}
                >
                Home
            </Nav.Link>
            
            <Nav.Link 
                href="#skills"
                onMouseEnter={(e) => (e.target.style.color = '#61dafb')}
                onMouseLeave={(e) => (e.target.style.color = '')}
                >
                Skills
            </Nav.Link>

            <Nav.Link 
                href="#project"
                onMouseEnter={(e) => (e.target.style.color = '#61dafb')}
                onMouseLeave={(e) => (e.target.style.color = '')}
                >
                Projects
            </Nav.Link>


            <Nav.Link 
                href="#About"
                onMouseEnter={(e) => (e.target.style.color = '#61dafb')}
                onMouseLeave={(e) => (e.target.style.color = '')}
                >
                About
            </Nav.Link>
            <Nav.Link 
                href="#contact"
                onMouseEnter={(e) => (e.target.style.color = '#61dafb')}
                onMouseLeave={(e) => (e.target.style.color = '')}
                >
                Contact Me
            </Nav.Link> 
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
    </>
  );
}

export default NavBar;