import './NavBar.css'

import { Container, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';

import NavBarSearch from "./NavBarSearch/NavBarSearch";

function ShapelyNavBar () {
	return (
		<Navbar className="py-3 border-bottom" expand="md" bg="white" fixed="top">
			<Container>
				<Navbar.Brand className="brand" style={ { fontWeight: 200 , fontSize: 24} } href="#">Shapely Demo</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
				<Navbar.Offcanvas
					id={`Navbar-expand-md`}
					aria-labelledby={`NavbarLabel-expand-md`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`NavbarLabel-expand-md`}>
							Shapely Demo
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link className="mx-0 mx-lg-2 fs-7 fw-bolder" href="#">HOME</Nav.Link>
							<Nav.Link className="mx-0 mx-lg-2 fs-7 fw-bolder" href="#">BLOG</Nav.Link>
							<Nav.Link className="mx-0 mx-lg-2 fs-7 fw-bolder" href="#">PORTFOLIO</Nav.Link>
							<NavDropdown
								title="ABOUT THE TESTS" className="mx-0 mx-lg-2 fs-7 fw-bolder"
							>
								<NavDropdown.Item href="#">Page Image Alignment</NavDropdown.Item>
								<NavDropdown.Item href="#">Page Markup And Formatting</NavDropdown.Item>
								<NavDropdown.Item href="#">Clearing Floats</NavDropdown.Item>
								<NavDropdown.Item href="#">Page With Comments</NavDropdown.Item>
								<NavDropdown.Item href="#">Page With Comments Disabled</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="LEVEL1" className="mx-0 mx-lg-2 fs-7 fw-bolder"
							>
								<NavDropdown.Item href="#">Level2</NavDropdown.Item>
								<NavDropdown.Item href="#">Level2a</NavDropdown.Item>
								<NavDropdown.Item href="#">Level2ab</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link className="mx-0 mx-lg-2 fs-7 fw-bolder" href="#">SHOP</Nav.Link>
							<NavBarSearch />
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}

export default ShapelyNavBar;