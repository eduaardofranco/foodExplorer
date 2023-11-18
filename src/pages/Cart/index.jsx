import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { DishList } from '../../components/DishList'
import { useCart } from '../../hooks/cart'
import { ButtonText } from '../../components/ButtonText'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Cart() {
    const [dishes, setDishes] = useState([])
    const { productsCart, addToCart, removeFromCart, getTotalCartAmount } = useCart()
    const totalAmount = getTotalCartAmount()

    const imageUrl = `${api.defaults.baseURL}/files/`

    //fetch dishes
    useEffect(() => {
        async function fetchDishes() {
            try {
                const result = await api.get('/dishes?name&ingredients')
                setDishes(result.data)
            } catch (error) {
                console.log('Error fetching Dishes', error)
            }
        }
        fetchDishes()
    },[])

    return(
        <Container>
            <Header />
            <main>
                <ButtonText to="/" title="Back" />
                <Title title="My Order" />
                {Object.keys(productsCart).length > 0 ?
                
                <>
                    {dishes.map((dish, index) => {
                        //check if there are same id in cart and dishes
                        const isInCart = productsCart[dish.id] !== undefined;
                        if(isInCart) {
                            const quantityInCart = productsCart[dish.id];

                            return (
                                <DishList
                                    key={String(index)}
                                    name={dish.name}
                                    btnTitle="Remove"
                                    img={imageUrl + dish.image}
                                    quantity={quantityInCart}
                                    price={dish.price}
                                />
                            )
                        }

                    })}

                    <h2>Total: €{totalAmount}</h2>
                    <div className="finalize">
                        <Button title="Next" />
                    </div>
                </>
                : 
                <h2>Cart is Empty</h2>
                }
            </main>


            <Footer />
        </Container>
    )
}