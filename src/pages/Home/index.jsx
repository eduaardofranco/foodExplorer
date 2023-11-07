import { Header } from '../../components/Header'
import { Container, Banner } from './styles'
import { Footer } from '../../components/Footer'
import { DishSlider } from '../../components/DishSlider'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishes, setDishes] = useState([])

  const starterDishes = dishes.filter(dish => dish.category_id === 1)
  const mainDishes = dishes.filter(dish => dish.category_id === 2)
  const drinksDishes = dishes.filter(dish => dish.category_id === 3)
  const desertDishes = dishes.filter(dish => dish.category_id === 4)


  useEffect(() => {
    async function fetchDishes() {
      const dishesData = await api.get('/dishes?name&ingredients')
      setDishes(dishesData.data)
    }
    
    fetchDishes()
  }, [])

  const { role = 'user' } = useAuth()
  let isAdmin = false
  if(role === 'admin') isAdmin = true

  return(
    <Container>
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <main>
        <div className="content">
          <Banner>
            <img src="https://placehold.co/1920x300" alt="Banner" />
          </Banner>
          {
            starterDishes.length !== 0 && (
              <div>
                <h2 className="subtitle">Startes</h2>
                <div>
                    <DishSlider dishes={starterDishes} isAdmin={isAdmin} />
                </div>
              </div>
            )

          }
          {
            mainDishes.length !== 0 && (
              <div>
                <h2 className="subtitle">Mains</h2>
                <div>
                    <DishSlider dishes={mainDishes} isAdmin={isAdmin} />
                </div>
              </div>
            )
          }
          {
          drinksDishes.length !== 0 && (
            <div>
              <h2 className="subtitle">Drinks</h2>
              <div>
                  <DishSlider dishes={drinksDishes} isAdmin={isAdmin} />
              </div>
            </div>
          )
          }
          {
          desertDishes.length !== 0 && (
            <div>
              <h2 className="subtitle">Dessert</h2>
              <DishSlider dishes={desertDishes} isAdmin={isAdmin} />
            </div>
          )
        }

        </div>
        </main>
      <Footer />
    </Container>
  )
}