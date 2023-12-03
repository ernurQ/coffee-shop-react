import {Nav} from "react-bootstrap";
import logo from "../../resources/icon/coffee-beans.svg";

import './navigation.scss'

const Navigation = () => {

    return (
        <Nav className="ms-5 ps-3 me-auto navigation">
            <Nav.Link href="#link" className={'text-white position-relative me-4'}>
                <img src={logo} alt="logo coffee beans" className="navigation__logo-img"/>
                <div className="navigation__logo-text text-white">Coffee house</div>
            </Nav.Link>
            <Nav.Link href="#link" className={'text-white me-4'}>Our coffee</Nav.Link>
            <Nav.Link href="#link" className={'text-white me-4'}>For your pleasure</Nav.Link>
        </Nav>
    )
}

export default Navigation