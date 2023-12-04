import {Navbar, Container} from "react-bootstrap";

import logo from '../../resources/icon/coffee-beans-nav-logo-white.svg'
import './navbar-coffee.scss'
import Navigation from "../navigation/navigation";

const NavbarCoffee = (props) => {
    const {setPage} = props

    return (
        <Navbar expand="lg" className={'navbar-coffee bg-transparent align-items-end'} fixed={'top'}>
            <Container>

                <Navbar.Brand href="#home" className={'d-block d-lg-none'}>
                    <img src={logo} alt="logo coffee beans"/>
                </Navbar.Brand>

                <Navbar.Toggle className={'border-white'} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation setPage={setPage} variant={'white'} />
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarCoffee