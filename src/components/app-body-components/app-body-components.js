import HeaderMain from "../header-main/header-main";
import AboutInfo from "../about-info/about-info";
import OurBest from "../our-best/our-best";
import HeaderMini from "../header-mini/header-mini";
import Deliminator from "../deliminator/deliminator";
import SearchFilterWrapper from "../search-filter-wrapper/search-filter-wrapper";
import ProductsList from "../products-list/products-list";
import AboutProduct from "../about-product/about-product";
import AboutService from "../../service/aboutService";
import ProductService from "../../service/productService";

const aboutService = new AboutService()
const productService = new ProductService()

function MainPage() {
    const aboutInfoData = aboutService.getAboutUsData()

    return (
        <>
            <HeaderMain />
            <AboutInfo data={aboutInfoData} />
            <OurBest />
        </>
    )
}

function CoffeePage(props) {
    const {openCoffeeItemPage} = props

    const aboutInfoData = aboutService.getAboutOurBeansData()
    const products = productService.getAllProducts()

    return (
        <>
            <HeaderMini text={'Our Coffee'} />
            <AboutInfo data={aboutInfoData} />
            <Deliminator />
            <SearchFilterWrapper />
            <ProductsList data={products} openCoffeeItemPage={openCoffeeItemPage} />
        </>
    )
}

function CoffeeItemPage(props) {
    const {id} = props
    const  coffeeData = productService.getProduct(id)

    return (
        <>
            <HeaderMini txt={'Our coffee'} />
            <AboutProduct data={coffeeData} />
        </>
    )
}

function GoodsPage(props) {
    const {openCoffeeItemPage} = props

    const aboutInfoData = aboutService.getAboutOurGoodsData()
    const products = productService.getAllProducts()

    return (
        <>
            <HeaderMini text={'For your pleasure'} />
            <AboutInfo data={aboutInfoData} />
            <Deliminator />
            <ProductsList data={products} openCoffeeItemPage={openCoffeeItemPage} />
        </>
    )
}

export {MainPage, CoffeePage, CoffeeItemPage, GoodsPage}