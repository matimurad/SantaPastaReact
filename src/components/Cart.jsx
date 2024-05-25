import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from './CartItem.jsx'

const Cart = () => {
    const { cart, total } = useContext(CartContext)

    return (
        <div className='cart'>
            <h1>Carrito</h1>
            {cart.map(item => <CartItem key={item.id} item={item}/>)}
            <p>Total: ${total()}</p>
        </div>
    )
}

export default Cart