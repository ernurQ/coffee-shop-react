import OurBestItem from "../our-best-item/our-best-item";

import './our-best.scss'

import img1 from '../../resources/our-best/best-item-1-img.png'
import img2 from '../../resources/our-best/best-item-2-img.png'
import img3 from '../../resources/our-best/best-item-3-img.png'
import {Container} from "react-bootstrap";

const OurBest = () => {

    return (
        <section className={'our-best text-center'}>
            <Container>
                <h2 className="our-best__title">Our best</h2>
                <div className="our-best__products d-flex justify-content-around">
                    <OurBestItem img={img1}
                                 alt={'Solimo Coffee Beans 2 kg'}
                                 description={'Solimo Coffee Beans 2 kg'}
                                 price={10.73} />
                    <OurBestItem img={img2}
                                 alt={'Presto Coffee Beans 1 kg'}
                                 description={'Presto Coffee Beans 1 kg'}
                                 price={15.99} />
                    <OurBestItem img={img3}
                                 alt={'AROMISTICO Coffee 1 kg'}
                                 description={'AROMISTICO Coffee 1 kg'}
                                 price={6.99} />
                </div>

            </Container>
        </section>
    )
}

export default OurBest