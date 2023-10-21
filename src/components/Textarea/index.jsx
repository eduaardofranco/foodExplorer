import { Container } from './styles' 

export function Textarea({ type, bound, label, placeholder, ...rest }) {
    return(
        <Container>
            <label htmlFor={bound}>{label}</label>
            <textarea type={type} placeholder={placeholder} id={bound}></textarea>
        </Container>
    )
}