
import './search.scss'
import {Component} from "react";

export default class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onInputUpdate = (e) => {
        const inputValue = e.target.value

        this.props.setSearchInputValue(inputValue)
        this.setState({inputValue})
    }

    render() {
        const {inputValue} = this.state

        return (
            <div className="search d-flex justify-content-between align-items-center">
                <div className="search__text">Looking for</div>
                <input className="search__input text-center"
                       onChange={this.onInputUpdate}
                       type="text"
                       placeholder={'start typing here...'}
                       value={inputValue} />
            </div>
        )
    }

}
