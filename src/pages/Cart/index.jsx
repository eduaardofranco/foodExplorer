import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { DishList } from '../../components/DishList'

export function Cart() {
    return(
        <Container>
            <Header />
            <main>
                <Title title="My Order" />
                <DishList
                    name="House Burger"
                    btn="Remove from cart"
                    img="https://placehold.co/150x150"
                />
                <DishList
                    name="House Burger"
                    btn="Remove from cart"
                    img="https://placehold.co/150x150"
                />

                <h2>Total: €159.80</h2>
                <div className="finalize">
                    <Button title="Next" />
                </div>
            </main>


            <Footer />
        </Container>
    )
}