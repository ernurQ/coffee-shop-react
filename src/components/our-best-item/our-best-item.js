import './our-best-item.scss'

const OurBestItem = (props) => {
    const {img, alt, description, price} = props

    return (
        <div className="our-best-item">
            <img src={img} alt={alt} className="our-best-item__img"/>
            <p className="our-best-item__description">{description}</p>
            <div className="our-best-item__price text-end">{price}$</div>
        </div>
    )
}

export default OurBestItem