import { useState, useEffect, createContext } from "react";

const CartContext = createContext([])

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, count) => {
        setCart(state => [...state, {...item, quantity: count}])
    }

    const totalCart = () => {
        return cart.reduce((acc, el) => acc + el.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, el) => acc + el.quantity * el.price, 0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, totalCart, total}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }