import { Container } from './styles'

export function DishList({ name, btn, img, quantity, onClick}) {
    return(
        <Container>
            <figure>
                <img src={ img } alt={ name } />
            </figure>
            <div className="inf">
                <h3>{ name }</h3>
                <p>{quantity}</p>
                <button onClick={onClick}>{ btn }</button>
            </div>
        </Container>
    )
}