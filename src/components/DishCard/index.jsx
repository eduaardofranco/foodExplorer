import { Container } from './styles'
import { BsHeart } from 'react-icons/bs'
import { AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { IoMdRemove } from 'react-icons/io'

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