import { Header } from '../components/Header'
import { Container } from './styles'
import { Footer } from '../components/Footer'
import { DishCard } from '../components/DishCard'

export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <div className="content">
          <div className="banner">
            <img src="https://placehold.co/476x120" alt="Banner" />
          </div>
          <h2>Dishes</h2>
          <DishCard />
        </div>
        </main>
      <Footer />
    </Container>
  )
}