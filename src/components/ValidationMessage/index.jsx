import { Container } from './styles'

export function ValidationMessage({ message, isError }) {
    return (
        <Container>
            <div className={isError ? 'error-message' : 'success-message'}>
            {message}
            </div>
        </Container>
      );
}