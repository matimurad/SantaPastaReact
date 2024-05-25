import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchImage } from "../assets/productos"

const Item = ({ item }) => {
    const [image, setImage] = useState()
    // useEffect(() => {
    //     fetchImage(props.items.name).then(setImage)
    // }, [props])
    return (
        <div className='item'>
            <h2>{item.name}</h2>
            <img src={image} alt={item.name} />
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`}>Detalle</Link>
        </div>
    )
}

export default Item