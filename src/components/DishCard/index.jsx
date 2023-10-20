import { Container } from './styles'
import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Quantity } from '../Quantity'
import { Button } from '../Button'

export function DishCard({ img, name, price, isFavourite}) {
    return(
        <Container>
            <button className="favourite">
                {isFavourite ? <AiFillHeart /> : <BsHeart />}
            </button>
            <figure>
                <img src={img} alt="Dish name" />

            </figure>
            <h3>{name}</h3>
            <span className="price">{price}</span>
            <Quantity />
            <Button title="add" />
        </Container>
    )
}