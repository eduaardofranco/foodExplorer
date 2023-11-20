import { Container } from './styles'

export function ProgressBar({ progress = 0 }) {
    return(
        <Container $progress={progress}>
            <span></span>
        </Container>
    )
}