
import './search.scss'

const Search = () => {

    return (
        <div className="search d-flex justify-content-between align-items-center">
            <div className="search__text">Looking for</div>
            <input type="text" placeholder={'start typing here...'} className="search__input text-center"/>
        </div>
    )
}

export default Search