import { Container } from './styles'

export function Element({ type }) {
    const classes = `skeleton ${type}`

    return(
        <Container className='skeleton-wrapper'>
            <div className={classes}>

            </div>
            <div className="shimmer-wrapper">
                <div className="shimmer"></div>
            </div>
        </Container>
    )
}