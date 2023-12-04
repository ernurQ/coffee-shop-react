import LogoBeans from "../logo-beans/logo-beans";
import {Container, Row} from "react-bootstrap";

import './about-product.scss'

const AboutProduct = (props) => {
    const {data: {img, alt, country, description, price}} = props

    return (
        <section className={'about-product bg-white d-flex justify-content-between'}>
            <Container className={''}>
                <Row>
                    <img src={img} alt={alt} className="about-product__img d-block offset-1 col-5"/>

                    <div className="about-product__content text-center col-5">
                        <h2 className="about-product__title d-block mx-auto">About it</h2>
                        <LogoBeans variant={'black'} />

                        <p className="about-product__country text-start">Country: <span>{country}</span></p>
                        <p className="about-product__description text-start">Description: <span>{description}</span></p>
                        <p className="about-product__price text-start">Price: <span>{price}</span></p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default AboutProduct