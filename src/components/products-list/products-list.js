
import './products-list.scss'
import ProductsListItem from "../products-list-item/products-list-item";
import {Container} from "react-bootstrap";

const ProductsList = () => {

    return (
        <Container>
            <ul className={'products-list'}>
                <ProductsListItem />
                <ProductsListItem />
                <ProductsListItem />

                <ProductsListItem />
                <ProductsListItem />
                <ProductsListItem />
            </ul>
        </Container>
    )
}

export default ProductsList