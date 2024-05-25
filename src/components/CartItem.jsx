const CartItem = ({ item }) => {
    return (
        <div className='cart-item'>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>${item.price * item.quantity}</p>
        </div>
    )
}

export default CartItem