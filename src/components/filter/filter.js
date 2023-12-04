
import './filter.scss'
import {Component} from "react";

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: [
                {text: 'Brazil'},
                {text: 'Kenya'},
                {text: 'Columbia'},
            ],
            currentFilter: '',
        }
    }

    onFilterClick = (filter) => {
        const {currentFilter} = this.state
        const res = (currentFilter === filter ? '' : filter)

        this.setState({currentFilter: res})
        this.props.setFilterValue(res)
    }

    render() {
        const {buttonsData, currentFilter} = this.state

        let id = 0
        const buttons = buttonsData.map(({text}) => {
            const clazz = (currentFilter === text ? 'filter__button_active' : '')
            return <button
                key={id++}
                className={`filter__button ${clazz}`}
                onClick={() => this.onFilterClick(text)} >{text}</button>
        })


        return (
            <div className="filter d-flex justify-content-between align-items-center">
                <div className="filter__text">Or filter</div>
                <div className="filter__buttons d-flex justify-content-between align-items-center">
                    {buttons}
                </div>
            </div>
        )
    }
}
