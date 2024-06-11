import { useState, useEffect, createContext } from "react";

const CartContext = createContext([])

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, count) => setCart(state => [...state, {...item, quantity: count}])

    const removeItem = item => setCart(cart.filter(itemPasta => itemPasta.name != item.name))

    const deleteCart = () => setCart([])

    const totalCart = () => cart.reduce((acc, el) => acc + el.quantity, 0)

    const total = () => cart.reduce((acc, el) => acc + el.quantity * el.price, 0)

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, deleteCart, totalCart, total}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }