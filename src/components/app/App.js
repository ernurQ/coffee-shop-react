import {Component} from "react";

import NavbarCoffee from "../navbar-coffee/navbar-coffee";
import Footer from "../footer/footer";
import {MainPage, CoffeePage, CoffeeItemPage, GoodsPage} from "../app-body-components/app-body-components";

import './App.scss';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'coffee',
            coffeeItemId: null,
        }
    }

    setPage = (page) => {
        this.setState({currentPage: page})
    }

    openCoffeeItemPage = (id) => {
        this.setState({
            currentPage: 'coffee item',
            coffeeItemId: id,
        })
    }


    render() {
        const {currentPage, coffeeItemId} = this.state
        let body
        switch (currentPage) {
            case 'coffee': {
                body = <CoffeePage openCoffeeItemPage={this.openCoffeeItemPage} />
                break
            }
            case 'coffee item': {
                body = <CoffeeItemPage coffeeItemId={coffeeItemId} />
                break
            }
            case 'goods': {
                body = <GoodsPage openCoffeeItemPage={this.openCoffeeItemPage} />
                break
            }
            default: {
                body = <MainPage />
            }
        }

        return (
            <div className="App">
                <NavbarCoffee setPage={this.setPage} />
                {body}
                <Footer setPage={this.setPage} />
            </div>
        )

    }
}





