import imgcarrito from "../assets/carrito.png"

const CartWidget = () => {
    return (
        <div className="carrito">
            <img src={imgcarrito} alt="carrito" />
            <p>4</p>
        </div>
    )
}
export default CartWidget