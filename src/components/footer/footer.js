import Navigation from "../navigation/navigation";
import LogoBeans from "../logo-beans/logo-beans";

import './footer.scss'

const Footer = () => {

    return (
        <footer className={'footer'}>
            <Navigation variant={'black'} />
            <LogoBeans variant={'black'} />
        </footer>
    )
}

export default Footer