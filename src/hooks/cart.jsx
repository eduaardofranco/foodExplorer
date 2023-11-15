import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItemCount, setCartItemCount] = useState(0)

    const addToCart = () => {
        setCartItemCount( cartItemCount + 1)
    }
    const removeFromCart = () => {
        setCartItemCount( cartItemCount - 1)
    }

    return(
        <CartContext.Provider value={{ CartContext, addToCart, removeFromCart}} >
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error('useCart must be used within a CartProvider');
    } else {
        return context
    }
}