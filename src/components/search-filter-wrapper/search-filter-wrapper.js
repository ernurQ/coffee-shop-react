
import './search-filter-wrapper.scss'
import Search from "../search/search";
import Filter from "../filter/filter";
import {Container} from "react-bootstrap";

const SearchFilterWrapper = (props) => {
    const {setSearchInputValue, setFilterValue} = props

    return (
        <div className="search-filter-wrapper">
            <Container className={'d-flex justify-content-between'}>
                <Search setSearchInputValue={setSearchInputValue} />
                <Filter setFilterValue={setFilterValue} />
            </Container>
        </div>
    )
}

export default SearchFilterWrapper