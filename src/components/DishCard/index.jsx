import { Container, Price, Finalize, Description, Favourite, Img } from './styles'

import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Quantity } from '../Quantity'
import { Button } from '../Button'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

export function DishCard({ id, img, name, description, price, isFavourite, onClick, onClickFavourite }) {
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1)
    const { addToCart, removeFromCart } = useCart()

    const { role = 'user' } = useAuth()
    let isAdmin = false
    if(role === 'admin') isAdmin = true

    const getQuantity = (quantity) => {
        setQuantity(quantity)   
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
                {isAdmin ? '' : <Quantity getQuantity={getQuantity} />}
                {isAdmin ? '' : <Button title="add" onClick={() => addToCart(id, quantity)} />}
            </Finalize>
        </Container>
    )
}