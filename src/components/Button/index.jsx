import { Container } from './styles'

export function Button({ title, icon: Icon, children, ...rest }) {
    return(
        <Container {...rest}>
            {Icon && <Icon />}
            <span>{title}</span>
            {children}
        </Container>
    )
}