import {Navbar, Container, Nav} from "react-bootstrap";

import logo from '../../resources/icon/coffee-beans.svg'
import './navbar-coffee.scss'

const NavbarCoffee = () => {

    return (
        <Navbar expand="lg" className={'bg-transparent align-items-end'} fixed={'top'}>
            <Container>

                <Navbar.Brand href="#home" className={'d-block d-lg-none'}>
                    <img src={logo} alt="logo coffee beans"/>
                </Navbar.Brand>

                <Navbar.Toggle className={'border-white'} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5 ps-3 me-auto">
                        <Nav.Link href="#link" className={'text-white position-relative me-4'}>
                            <img src={logo} alt="logo coffee beans" className="navbar__logo-img d-none d-lg-block"/>
                            <div className="navbar__logo-text text-white">Coffee house</div>
                        </Nav.Link>
                        <Nav.Link href="#link" className={'text-white me-4'}>Our coffee</Nav.Link>
                        <Nav.Link href="#link" className={'text-white me-4'}>For your pleasure</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarCoffee