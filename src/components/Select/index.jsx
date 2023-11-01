import { Container } from './styles'

export function Select({ label, bound, placeholder,  ...rest}) {
    return(
        <Container>
            <label htmlFor={bound}>
                {label}
            </label>
            <select placeholder={placeholder} id={bound} {...rest} >
            </select>
        </Container>
    )
}