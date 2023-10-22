import { Container } from './styles'

export function Input({ placeholder, label, type, bound, children, ...rest}) {
    return(
        <Container>
            <label htmlFor={bound}>
                {label}
            </label>
            {children}
            <input id={bound} placeholder={placeholder} type={type} {...rest} />
        </Container>
    )
}