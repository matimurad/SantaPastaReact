import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchImage } from "../assets/productos"

const Item = (props) => {
    const [image, setImage] = useState()
    useEffect(() => {
        fetchImage(props.product.name).then(setImage)
    }, [props])
    return (
        <div className='item'>
            <h2>{props.product.name}</h2>
            <img src={image} alt={props.product.name} />
            <p>${props.product.price}</p>
            <Link to={`/item/${props.product.id}`}>Detalle</Link>
        </div>
    )
}

export default Item