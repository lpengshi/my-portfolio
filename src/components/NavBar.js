import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="/">GREG LAI</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">HOME</Nav.Link>
						<Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
						<Nav.Link href="#skills">SKILLS</Nav.Link>
						<Nav.Link href="#projects">PROJECTS</Nav.Link>
						<Nav.Link href="#contact">CONTACT</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default NavBar;
