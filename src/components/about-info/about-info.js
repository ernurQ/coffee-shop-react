import LogoBeans from "../logo-beans/logo-beans";

import './about-info.scss'

const AboutInfo = (props) => {
    const {data: {img, alt, title, text}} = props

    return (
        <section className={'about-info bg-white text-center d-flex justify-content-between'}>

            {img === null ? null : <img src={img} alt={alt} className="about-info__img d-block mx-5"/>}

            <div className="about-info__content mx-5 flex-grow-1">
                <h2 className="about-info__title d-block mx-auto">{title}</h2>
                <LogoBeans variant={'black'} />
                <p className="about-info__text">{text}</p>
            </div>

        </section>
    )
}

export default AboutInfo