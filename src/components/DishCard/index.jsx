import { Container } from './styles'
import { BsHeart } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdRemove } from 'react-icons/io'

export function DishCard() {
    return(
        <Container>
            <button className="favourite">
                <BsHeart />
            </button>
            <img src="/src/assets/dish.png" alt="Dish name" />
            <h3>Salada Ravanello</h3>
            <span className="price">R$ 49,97</span>
            <div className="increments">
                <button>
                    <IoMdRemove />
                </button>
                    <span>01</span>
                <button>
                    <AiOutlinePlus />
                </button>
            </div>
            <button className='add'>Add</button>
        </Container>
    )
}