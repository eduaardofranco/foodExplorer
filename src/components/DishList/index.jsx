import { Container } from './styles'

export function DishList({ name, btnTitle, img, quantity, price, onClick}) {
    return(
        <Container>
            <figure>
                <img src={ img } alt={ name } />
            </figure>
            <div className="inf">
                <h3>
                    {quantity ? `${quantity} X  ${name}` : name }
                    { price ? <span> €{price}</span> : null}
                </h3>
                <button onClick={onClick}>{ btnTitle }</button>
            </div>
        </Container>
    )
}