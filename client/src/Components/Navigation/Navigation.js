import React from 'react';
import Social from './Social';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation(props) {
	console.log('Navigation Rendered');
	return (
		<Navbar expand="lg">
			<Navbar.Brand href="/">The Dulcimer Hymnal</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="Hymnals" id="basic-nav-dropdown">
						<NavDropdown.Item href="volume-1">Volume 1</NavDropdown.Item>
						<NavDropdown.Item href="volume-2">Volume 2</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Free Arangements" id="basic-nav-dropdown">
						<NavDropdown.Item href="free-hyms-from-dulcimer-hymnal">Free Hyms From The Dulcimer Hymnal</NavDropdown.Item>
						<NavDropdown.Item href="free-hymn-sheet-music">Free Hymn Sheet Music</NavDropdown.Item>
						<NavDropdown.Item href="misc-dulcimer-arrangements">Misc. Dulcimer Arrangements</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="about">About</Nav.Link>
				</Nav>
				<Social />
			</Navbar.Collapse>
			
		</Navbar>
	);
}

export default Navigation;
