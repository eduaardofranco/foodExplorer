import { Container } from './styles'

export function Select({ label, bound, placeholder, options,  ...rest}) {
    return(
        <Container>
            <label htmlFor={bound}>
                {label}
            </label>
            <select placeholder={placeholder} id={bound} {...rest} >
                { options.map((option,index) => <option key={String(index)}>{option}</option> )}
            </select>
        </Container>
    )
}