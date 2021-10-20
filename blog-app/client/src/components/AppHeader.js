import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Container, NavbarBrand } from 'reactstrap';
import { useState } from 'react';

const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="danger" dark expand="md" className="mb-5" id="nav">
                <Container>
                    <NavbarBrand className="h2" href="/">MyBlog</NavbarBrand>
                    <NavbarToggler onClick={toggle}></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Log In
                                </NavLink>
                            </NavItem>
                            <NavItem className="bg-light ms-5">
                                <NavLink href="/" className="text-dark">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppHeader
