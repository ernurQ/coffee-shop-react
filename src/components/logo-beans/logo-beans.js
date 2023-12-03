import whiteBeans from '../../resources/icon/coffee-beans-white.svg'
import blackBeans from '../../resources/icon/coffee-beans-black.svg'
import './logo-beans.scss'

const LogoBeans = (props) => {
    const {type} = props
    const beanLogo = (type === 'white' ? whiteBeans : blackBeans)
    const clazz = (type === 'white' ? 'logo-beans_white' : 'logo-beans_black')

    return (
        <div className={`logo-beans ${clazz}`}>
            <img src={beanLogo} alt="beans logo"/>
        </div>
    )
}

export default LogoBeans