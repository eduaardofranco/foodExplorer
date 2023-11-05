import { Container, Price, Finalize, Description, Favourite, Img } from './styles'

import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Quantity } from '../Quantity'
import { Button } from '../Button'
import { PiPencilSimpleBold } from 'react-icons/pi'

export function DishCard({ img, name, description, price, isFavourite, isAdmin}) {
    return(
        <Container>
            <Favourite>
                {isAdmin ? <PiPencilSimpleBold /> : (isFavourite ? <AiFillHeart /> : <BsHeart />)}
            </Favourite>
            <Img>
                <img src={img} alt={name} />

            </Img>
            <h3>{name}</h3>
            <Description>
                {description}
            </Description>
            <Price>€{price}</Price>
            <Finalize>
                {isAdmin ? '' : <Quantity />}
                {isAdmin ? '' : <Button title="add" />}
            </Finalize>
        </Container>
    )
}