
import './products-list-item.scss'

import img from '../../resources/our-best/best-item-3-img.png'

const ProductsListItem = () => {

    const title = 'AROMISTICO Coffee 1 kg'
    const country = 'Brazil'
    const price = 6.99

    return (
        <li className="products-list-item">
            <img src={img} alt={'coffee'} className={'products-list-item__img d-block mx-auto'}/>
            <p className="products-list-item__title text-center">{title}</p>
            <p className="products-list-item__country text-end">{country}</p>
            <p className="products-list-item__price text-end">{price}&</p>
        </li>
    )
}

export default ProductsListItem