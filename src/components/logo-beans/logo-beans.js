import whiteBeans from '../../resources/icon/coffee-beans-white.svg'
import blackBeans from '../../resources/icon/coffee-beans-black.svg'
import './logo-beans.scss'

const LogoBeans = (props) => {
    const {type: variant} = props
    const beanLogo = (variant === 'white' ? whiteBeans : blackBeans)
    const clazz = (variant === 'white' ? 'logo-beans_white' : 'logo-beans_black')

    return (
        <div className={`logo-beans ${clazz}`}>
            <img src={beanLogo} alt="beans logo"/>
        </div>
    )
}

export default LogoBeans