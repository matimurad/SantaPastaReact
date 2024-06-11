import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Item = ({ item }) => {
    const [image, setImage] = useState()

    return (
        <Link className='item' to={`/item/${item.id}`}>
            <h2>{item.name}</h2>
            <img src={item.imagen} alt={item.name} />
            <p>${item.price}</p>
        </Link>
    )
}

export default Item