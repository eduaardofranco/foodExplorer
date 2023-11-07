import { Container, Price, Finalize, Description, Favourite, Img } from './styles'

import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Quantity } from '../Quantity'
import { Button } from '../Button'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { useState } from 'react'

export function DishCard({ img, name, description, price, isFavourite, isAdmin, onClick }) {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const updatePrice = (newQuantity) => {
        setQuantity(newQuantity);
        setTotalPrice(price * newQuantity);
      };


    return(
        <Container>
            <Favourite>
                {isAdmin ? <PiPencilSimpleBold /> : (isFavourite ? <AiFillHeart /> : <BsHeart />)}
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
                {isAdmin ? '' : <Quantity
                    quantity={quantity}
                    updatePrice={updatePrice}
                />}
                {isAdmin ? '' : <Button title="add" />}
            </Finalize>
        </Container>
    )
}