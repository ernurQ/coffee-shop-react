import {Container} from "react-bootstrap";

import './header-mini.scss'

const HeaderMini = (props) => {
    const {text} = props

    return (
        <header className="header-mini w-100 text-white text-center">
            <Container>
                <p className="header-mini__content">{text}</p>
            </Container>
        </header>
    )
}

export default HeaderMini