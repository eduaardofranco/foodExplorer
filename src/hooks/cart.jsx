import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [dishes, setDishes] = useState([])
    //load products in sessionStorage
    //otherwise sets productCount as array
    const [productsCart, setProductsCart] = useState(() => {
        const storedProdutsCart = sessionStorage.getItem('@cart')
        return storedProdutsCart ? JSON.parse(storedProdutsCart) : {}

    })

    //get the total amount of items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        //do a for in the products cart object
        for (const item in productsCart) {
          if (productsCart[item] !== undefined) {
            //find dish with id 
            let itemPrice = dishes.find((dish) => dish.id === Number(item));
      
            if (itemPrice) {
              totalAmount += productsCart[item] * itemPrice.price;
            }
          }
        }
      
        return totalAmount;
      };

    const addToCart = (id, quantity) => {
        setProductsCart((prevState) => ({
            ...prevState,
            //object key is the ID, if there is this in on the object, increments, otherwise create a new one
            [id]: (prevState[id] || 0) + quantity,
        }))
    }
    //update sessionStorage when productCount changes
    useEffect(() => {
        // console.log(productsCart)
        sessionStorage.setItem('@cart', JSON.stringify(productsCart))

    }, [productsCart])

    //fetch dishes
    useEffect(() => {
        async function fetchDishes() {
            try {
                // console.log('Making API request...');
                const result = await api.get('/dishes?name&ingredients');
                // console.log('API response:', result.data);
                setDishes(result.data);
            } catch (error) {
                console.log('Error fetching Dishes', error);
            }
        }
        fetchDishes()
    },[])
    
    const removeFromCart = () => {
        // setProductCount( cartItemCount - 1)
    }

    return(
        <CartContext.Provider value={{
            productsCart,
            addToCart,
            removeFromCart,
            getTotalCartAmount }} >
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