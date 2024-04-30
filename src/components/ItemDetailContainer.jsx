import { useParams } from 'react-router-dom'
import { fetchImage } from '../assets/productos'
import { useEffect, useState } from 'react'

const ItemDetailContainer = (props) => {
    const [image, setImage] = useState()

    const pasta = parseInt(useParams().pasta)

    const product = props.products.find(product => product.id == pasta)

    useEffect(() => {
        fetchImage(product.name).then(setImage)
    }, [props])

    return (
        <div className='type'>
            <h1>{product.name}</h1>
            <div>
                <img src={image} alt={product.name} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas in quisquam beatae voluptatem qui id voluptatibus odit accusantium similique est, corrupti dignissimos dolorem dolor eius ea deserunt ut alias.</p>
            </div>
            <p>${product.price}</p>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetailContainer