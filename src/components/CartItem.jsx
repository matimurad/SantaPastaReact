import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import bin from '../assets/tacho.png'

const CartItem = ({ item }) => {
    const {removeItem} = useContext(CartContext)

    return (
        <div className='cart-item'>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeItem(item)}><img className='bin' src={bin} alt='Eliminar item' /></button>
        </div>
    )
}

export default CartItem