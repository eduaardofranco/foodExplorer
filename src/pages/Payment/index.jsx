import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'

export function Payment() {
    return(
        <Container>
            <Header />
            <main>
                <Title title="Payment" />
               
            </main>


            <Footer />
        </Container>
    )
}