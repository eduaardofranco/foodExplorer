import { Container } from './styles'

export function DishList({ name, btn, img}) {
    return(
        <Container>
            <figure>
                <img src={ img } alt={ name } />
            </figure>
            <div className="inf">
                <h3>{ name }</h3>
                <button>{ btn }</button>
            </div>
        </Container>
    )
}