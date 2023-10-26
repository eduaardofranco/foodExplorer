import { Container } from './styles'
import { BsHeart } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { Quantity } from '../Quantity'
import { Button } from '../Button'
import { PiPencilSimpleBold } from 'react-icons/pi'

export function DishCard({ img, name, price, isFavourite, isAdmin}) {
    return(
        <Container>
            <button className="favourite">
                
            {isAdmin ? <PiPencilSimpleBold /> : (isFavourite ? <AiFillHeart /> : <BsHeart />)}
            </button>
            <figure>
                <img src={img} alt="Dish name" />

            </figure>
            <h3>{name}</h3>
            <p className="description">
            Presunto de parma e rúcula em um pão com fermentação natural.
            </p>
            <span className="price">{price}</span>
            <div className="finalize">
                {isAdmin ? '' : <Quantity />}
                {isAdmin ? '' : <Button title="add" />}
            </div>
        </Container>
    )
}