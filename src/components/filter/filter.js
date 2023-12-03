
import './filter.scss'

const Filter = () => {

    return (
        <div className="filter d-flex justify-content-between align-items-center">
            <div className="filter__text">Or filter</div>
            <div className="filter__buttons d-flex justify-content-between align-items-center">
                <button className="filter__button">Brazil</button>
                <button className="filter__button">Kenya</button>
                <button className="filter__button">Columbia</button>
            </div>
        </div>
    )
}

export default Filter