
import './products-list-item.scss'

const ProductsListItem = (props) => {
    const {data: {img, alt, title, country, price}, openCoffeeItemPage} = props

    return (
        <li className="products-list-item" onClick={openCoffeeItemPage}>
            <img src={img} alt={alt} className={'products-list-item__img d-block mx-auto'}/>
            <p className="products-list-item__title text-center">{title}</p>
            <p className="products-list-item__country text-end">{country}</p>
            <p className="products-list-item__price text-end">{price}&</p>
        </li>
    )
}

export default ProductsListItem