import {Navbar, Container} from "react-bootstrap";

import logo from '../../resources/icon/coffee-beans.svg'
import './navbar-coffee.scss'
import Navigation from "../navigation/navigation";

const NavbarCoffee = () => {

    return (
        <Navbar expand="lg" className={'navbar-coffee bg-transparent align-items-end'} fixed={'top'}>
            <Container>

                <Navbar.Brand href="#home" className={'d-block d-lg-none'}>
                    <img src={logo} alt="logo coffee beans"/>
                </Navbar.Brand>

                <Navbar.Toggle className={'border-white'} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation />
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarCoffee