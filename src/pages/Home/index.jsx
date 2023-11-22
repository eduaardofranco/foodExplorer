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
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')

  //fetch dishes
  useEffect(() => {
    async function fetchDishes() {
      const dishesData = await api.get('/dishes?name&ingredients')
      setDishes(dishesData.data)
    }
    
    fetchDishes()
  }, [])

  //fetch categories
  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('category')
      setCategories(response.data)
    }
    fetchCategories()
  },[])

  //check if is admin or user
  const { role = 'user' } = useAuth()
  let isAdmin = false
  if(role === 'admin') isAdmin = true

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  return(
    <Container>
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        />
      <Header onOpenMenu={() => setMenuIsOpen(true)} onSearch={handleSearch} />
      <main>
        <div className="content">
          <Banner>
            <img src="https://placehold.co/1920x300" alt="Banner" />
          </Banner>
          {
            // do a map by category
            categories && categories.map((category,index) => (
              <div key={String(index)}>
                <h2 className="subtitle">{category.name}</h2>
                <div className='slider-section'>
                    <DishSlider category_id={category.id} onSearch={search}/>
                </div>
              </div>
            ))
          }

        </div>
        </main>
      <Footer />
    </Container>
  )
}