
import './search-filter-wrapper.scss'
import Search from "../search/search";
import Filter from "../filter/filter";
import {Container} from "react-bootstrap";

const SearchFilterWrapper = () => {

    return (
        <div className="search-filter-wrapper">
            <Container className={'d-flex justify-content-between'}>
                <Search />
                <Filter />
            </Container>
        </div>
    )
}

export default SearchFilterWrapper