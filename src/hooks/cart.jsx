import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [productCount, setProductCount] = useState({})

    const addToCart = (id, quantity) => {
        setProductCount((prevState) => ({
            ...prevState,
            //object key is the ID, if there is this in on the object, increments, otherwise create a new one
            [id]: (prevState[id] || 0) + quantity,
        }))
    }
    useEffect(() => {
        console.log(productCount)

    }, [productCount])
    
    const removeFromCart = () => {
        // setProductCount( cartItemCount - 1)
    }

    return(
        <CartContext.Provider value={{
            CartContext,
            productCount,
            addToCart,
            removeFromCart}} >
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