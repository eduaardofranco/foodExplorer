import { Container } from './styles'
import { Element } from '../Element'
import { Shimmer } from '../Shimmer'

export function DishListSkeleton() {
    return(
        <Container>
            <div className='skeleton-dishList'>
                <Element type="avatar" />
                <div className="right">
                    <Element type="title" />
                    <Element type="text" />

                </div>
            </div>
            <Shimmer />
        </Container>
    )
}