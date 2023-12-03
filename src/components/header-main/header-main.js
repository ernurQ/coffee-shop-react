import './header-main.scss'
import LogoBeans from "../logo-beans/logo-beans";
import {Button, Container} from "react-bootstrap";

const HeaderMain = () => {

    return (
        <header className="header-main w-100 text-white">
            <Container className={'text-center'}>
                <h1 className={'header-main__title'}>Everything You Love About Coffee</h1>
                <LogoBeans type={'white'} />
                <p className="header-main__content">We makes every day full of energy and taste</p>
                <p className="header-main__try">Want to try our beans?</p>
                <Button variant={'outline-light'} className={'header-main__more'}>More</Button>
            </Container>
        </header>
    )
}

export default HeaderMain