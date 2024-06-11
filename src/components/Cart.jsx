import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartItem from './CartItem.jsx'

const Cart = () => {
    const { cart, total, deleteCart } = useContext(CartContext)

    return (
        <div className='cart'>
            <h1>Carrito</h1>
            {cart.map(item => <CartItem key={item.id} item={item}/>)}
            <p>Total: ${total()}</p>
            {cart.length &&
                <>
                    <button onClick={deleteCart}>Borrar carrito</button>
                    <Link to='/checkout'>
                        <button>Terminá tu compra</button>
                    </Link>
                </>
            }
        </div>
    )
}

export default Cart