import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DishList } from '../../components/DishList'

export function Favourites() {
    return(
        <Container>
            <Header />
            <main>
                <Title title="My Favourites" />
                <DishList
                    name="House Burger"
                    btn="Remove from Favourites"
                    img="https://placehold.co/150x150"
                />
                <DishList
                    name="House Burger"
                    btn="Remove from Favourites"
                    img="https://placehold.co/150x150"
                />

            </main>


            <Footer />
        </Container>
    )
}