import { Container, Left, Right } from './styles'
import { Element } from '../Element'
import { Shimmer } from '../Shimmer'

export function DishDetailSkeleton() {
    return(
        <Container>
            <div className='skeleton-DishDetail'>
                <Left>
                    <Element type="img" />
                </Left>
                <Right>
                    <Element type="title" />
                    <Element type="text" />
                    <Element type="text" />
                    <Element type="text" />
                    <Element type="btn" />

                </Right>
            </div>
            <Shimmer />
        </Container>
    )
}