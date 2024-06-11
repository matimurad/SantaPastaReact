import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1)

    const {cart, addToCart} = useContext(CartContext)

    const res = () => {
        if (count > 1) setCount(count - 1)
    }

    const sum = () => {
        setCount(count + 1)
    }
    
    return (
        <>
            <div className="count">
                <p className='round' onClick={res}>-</p>
                <p>{count}</p>
                <p className='round' onClick={sum}>+</p>
            </div>
            {cart.some(item => item.name == product.name)
                ? <Link to='/cart'><button>Ir al carrito</button></Link>
                : <button onClick={() => addToCart(product, count)}>Agregar al carrito</button>
            }
        </>
    )
}

export default ItemCount