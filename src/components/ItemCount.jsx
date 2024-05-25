import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1)

    const context = useContext(CartContext)

    const res = () => {
        if (count > 1) setCount(count - 1)
    }

    const sum = () => {
        setCount(count + 1)
    }
    
    return (
        <>
            <div>
                <p onClick={res}>-</p>
                <p>{count}</p>
                <p onClick={sum}>+</p>
            </div>
            <button onClick={() => context.addToCart(product, count)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount