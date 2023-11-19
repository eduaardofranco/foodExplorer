import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function DishList({ name, id, btnTitle, img, quantity, price, onClick }) {
    const navigate = useNavigate()
    
    function handleDetail(event, id) {
        event.preventDefault()
        navigate(`/detail/${id}`)
    }

    return(
        <Container> 
            <div>
                <figure onClick={(event) => handleDetail(event, id)}>
                    <img src={ img } alt={ name } />
                </figure>
                <div className="inf">
                    <h3 onClick={(event) => handleDetail(event, id)}>
                        {quantity ? `${quantity} X  ${name}` : name }
                        { price ? <span> €{price}</span> : null}
                    </h3>

                    <button onClick={onClick}>{ btnTitle }</button>
                </div>
            </div>
        </Container>
    )
}