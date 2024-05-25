import { useContext } from "react"
import imgcarrito from "../assets/carrito.png"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const num = useContext(CartContext).totalCart()
    
    return (
        <div>
            <img src={imgcarrito} alt="carrito" />
            <p>{num}</p>
        </div>
    )
}
export default CartWidget