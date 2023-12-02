import { Container } from './styles'
import { Element } from '../Element'
import { Shimmer } from '../Shimmer'

export function DishCardSkeleton() {
    return(
        <Container>
            <div className='skeleton-dishCard'>
                <Element type="img" />
                <Element type="text" />
                <Element type="btn" />
            </div>
            <Shimmer />
        </Container>
    )
}