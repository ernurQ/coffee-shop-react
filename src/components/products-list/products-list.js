
import './products-list.scss'
import ProductsListItem from "../products-list-item/products-list-item";
import {Container} from "react-bootstrap";

const ProductsList = (props) => {
    const {openCoffeeItemPage, data} = props

    let id = 0
    const products = data.map(data => (
            <ProductsListItem
                key={id++}
                data={data}
                openCoffeeItemPage={() => openCoffeeItemPage(id)}/>
    ))


    return (
        <Container>
            <ul className={'products-list'}>
                {products}
            </ul>
        </Container>
    )
}

export default ProductsList