import { Container } from './styles'

export function Input({ placeholder, label, type, bound, ...rest}) {
    return(
        <Container>
            <label htmlFor={bound}>
                {label}
            </label>
            <input id={bound} placeholder={placeholder} type={type} {...rest} />
        </Container>
    )
}