import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'

export function Cart() {
    return(
        <Container>
            <Header />
            <main>
                <Title title="My Order" />
                <ItemOrder>
                    <figure>
                        <img src="https://placehold.co/150x150" alt="Dish name" />
                    </figure>
                    <div className="inf">
                        <h3>Ceaser Salad</h3>
                        <button>remove item</button>
                    </div>
                </ItemOrder>
                <ItemOrder>
                    <figure>
                        <img src="https://placehold.co/600x600" alt="Dish name" />
                    </figure>
                    <div className="inf">
                        <h3>Ceaser Salad</h3>
                        <button>remove item</button>
                    </div>
                </ItemOrder>
                <ItemOrder>
                    <figure>
                        <img src="https://placehold.co/100x100" alt="Dish name" />
                    </figure>
                    <div className="inf">
                        <h3>Ceaser Salad</h3>
                        <button>remove item</button>
                    </div>
                </ItemOrder>
                <ItemOrder>
                    <figure>
                        <img src="https://placehold.co/300x300" alt="Dish name" />
                    </figure>
                    <div className="inf">
                        <h3>Ceaser Salad</h3>
                        <button>remove item</button>
                    </div>
                </ItemOrder>

                <h2>Total: €159.80</h2>
                <div className="finalize">
                    <Button title="Next" />
                </div>
            </main>


            <Footer />
        </Container>
    )
}