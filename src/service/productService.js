
import img from '../resources/our-best/best-item-3-img.png'
import imgFull from '../resources/coffee-aromistico.jpg'

export default class ProductService {

    constructor() {
        this.productsListData = [
            {
                img: img,
                imgFull: imgFull,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Brazil',
                price: 6.99
            },
            {
                img: img,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Kenya',
                price: 6.99
            },
            {
                img: img,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Columbia',
                price: 6.99
            },
            {
                img: img,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Brazil',
                price: 6.99
            },
            {
                img: img,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Brazil',
                price: 6.99
            },
            {
                img: img,
                alt: 'coffee',
                title: 'AROMISTICO Coffee 1 kg',
                country: 'Brazil',
                price: 6.99
            },
        ]
    }


    getAllProducts() {
        return this.productsListData
    }

    getProduct(id) {
        return {
            img: imgFull,
            alt: 'coffee',
            country: 'Brasil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            price: 16.99,
        }
    }
}