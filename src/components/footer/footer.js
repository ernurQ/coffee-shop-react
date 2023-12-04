import Navigation from "../navigation/navigation";
import LogoBeans from "../logo-beans/logo-beans";

import './footer.scss'

const Footer = (props) => {
    const {setPage} = props

    return (
        <footer className={'footer'}>
            <Navigation variant={'black'} setPage={setPage} />
            <LogoBeans variant={'black'} />
        </footer>
    )
}

export default Footer