import './header-main.scss'
import LogoBeans from "../logo-beans/logo-beans";

const HeaderMain = () => {

    return (
        <header className="header-main w-100 text-white">
            <div className="container text-center">
                <h1 className={'header-main__title'}>Everything You Love About Coffee</h1>
                <LogoBeans type={'white'} />
                <p className="header-main__content">We makes every day full of energy and taste</p>
                <p className="header-main__try">Want to try our beans?</p>
                <button className="header-main__more">More</button>
            </div>
        </header>
    )
}

export default HeaderMain