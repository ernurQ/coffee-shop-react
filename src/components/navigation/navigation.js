import logoWhite from '../../resources/icon/coffee-beans-nav-logo-white.svg';
import logoBlack from '../../resources/icon/coffee-beans-nav-logo-black.svg'

import './navigation.scss'

const Navigation = (props) => {
    const {variant} = props
    const color = (variant === 'white' ? 'text-white' : 'text-black')
    const logoImg = (variant === 'white' ? logoWhite : logoBlack)

    return (
        <div className="navigation d-flex">

            <button className={'navigation__btn me-4 position-relative'}>
                <img src={logoImg} alt="logo coffee beans" className="navigation__logo-img"/>
                <div className={`navigation__logo-text ${color}`} >Coffee house</div>
            </button>

            <button className={`navigation__btn me-4 ${color}`}>Our coffee</button>

            <button  className={`navigation__btn me-4 ${color}`}>For your pleasure</button>

        </div>
    )
}

export default Navigation