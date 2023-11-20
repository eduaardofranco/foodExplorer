import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [dishes, setDishes] = useState([])
    //load products in sessionStorage
    //otherwise sets productCart as array
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
            //object key is the ID, if there is this in the object, increments, otherwise create a new one
            [id]: (prevState[id] || 0) + quantity,
        }))
    }
    const removeFromCart = (id) => {
        setProductsCart((prev) => {
            const newCart = {...prev}
            delete newCart[id]
            return newCart
        })
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
                const token = localStorage.getItem('@foodexplorer:token')
                //check if there is token set
                if(token) {
                    api.defaults.headers.common['Authorization'] = [`Bearer ${token}`]
                    const result = await api.get('/dishes?name&ingredients');
                    setDishes(result.data);
                }

            }  catch (error) {
                if (error.response && error.response.status === 401) {
                    // Handle unauthorized access here
                    console.error('Unauthorized access');
                } else {
                    console.error('Error fetching dishes', error);
                }
            }
        }
        fetchDishes()
    },[])

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