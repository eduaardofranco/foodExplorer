import { Container, Price, Finalize, Description, Favourite, Img } from './styles'

import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdCart } from "react-icons/io";
import { Quantity } from '../Quantity'
import { Button } from '../Button'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

export function DishCard({ id, img, name, description, price, isFavourite, onClick, onClickFavourite }) {
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1)
    const [resetQuantity, setResetQuantity] = useState(1)
    const [addItemClicked, setAddItemClicked] = useState(false)
    const { addToCart, removeFromCart } = useCart()

    const { role = 'user' } = useAuth()
    let isAdmin = false
    if(role === 'admin') isAdmin = true

    // console.log(initialQuantity)

    const getQuantity = (quantity) => {
        setQuantity(quantity)   
    }

    const addProductToCart = (id, quantity) => {
        addToCart(id, quantity)
        setResetQuantity((prev) => prev + 1)
        //add class responsible for button animation
        setAddItemClicked(true)
        //remove class after 2.5s
        setTimeout(() => {
            setAddItemClicked(false)
        },2500)
    }


    return( 
        <Container>
            <Favourite>
                {isAdmin ? <PiPencilSimpleBold /> : (isFavourite ? <AiFillHeart onClick={onClickFavourite} /> : <BsHeart onClick={onClickFavourite} />)}
            </Favourite>
            <a href="#" onClick={onClick}>
                <Img>
                    <img src={img} alt={name} />

                </Img>
                <h3>{name}</h3>
                <Description>
                    {description}
                </Description>
                <Price>€{totalPrice.toFixed(2)}</Price>

            </a>
            <Finalize>
                {isAdmin ? '' : <Quantity getQuantity={getQuantity} resetQuantity={resetQuantity} />}
                {isAdmin ? '' : <Button
                                    className={addItemClicked == true ? 'added-cart add' : 'add'}
                                    icon={IoMdCart}
                                    title="add"
                                    onClick={() => addProductToCart(id, quantity)}
                                    disabled={addItemClicked == true ? 'disabled' : null}
                                >
                                    <span className='added'>{quantity} Added</span>
                                </Button>}
            </Finalize>
        </Container>
    )
}