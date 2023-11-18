import { Container } from './styles'

export function DishList({ name, btn, img, quantity, price, onClick}) {
    return(
        <Container>
            <figure>
                <img src={ img } alt={ name } />
            </figure>
            <div className="inf">
                <h3>{`${quantity} X  ${name}`} <span>€{price}</span></h3>
                <button onClick={onClick}>{ btn }</button>
            </div>
        </Container>
    )
}