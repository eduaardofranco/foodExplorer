import { Header } from '../../components/Header'
import { Container, Banner } from './styles'
import { Footer } from '../../components/Footer'
import { DishSlider } from '../../components/DishSlider'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { DishCard } from '../../components/DishCard'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


export function Home() {
  const imageUrl = `${api.defaults.baseURL}/files/`


  // init Swiper:  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    lidesPerView: 5,
    loop: true
    
  });

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishes, setDishes] = useState([])
  const [categories, setCategories] = useState([])


  useEffect(() => {
    async function fetchDishes() {
      const dishesData = await api.get('/dishes?name&ingredients')
      setDishes(dishesData.data)
    }
    
    fetchDishes()
  }, [])

  useEffect(() => {
    async function fetchCategories() {
      const result = await api.get('category')
      setCategories(result.data)
    }
    fetchCategories()
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

          <div className="swiper-container">
              {categories &&
                categories.map((category, index) => (
                  <>
                  <h2 className="subtitle">{category.name}</h2>
                  <div className="swiper-wrapper">
                  <div key={String(index)} className="swiper-slide">
                      {dishes &&
                        dishes.map((dish, index) =>
                          dish.category_id === category.id ? (
                            <div key={String(index)} className="swiper-slide">
                              <DishCard
                                name={dish.name}
                                price={dish.price}
                                img={imageUrl + dish.image}
                                description={dish.description}
                              />
                            </div>
                          ) : null
                        )}
                    </div>
                  </div>
                  </>
                ))}

          </div>

        </div>
        </main>
      <Footer />
    </Container>
  )
}