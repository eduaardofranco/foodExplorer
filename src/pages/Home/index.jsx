import { Header } from '../../components/Header'
import { Container, Banner, Text } from './styles'
import { Footer } from '../../components/Footer'
import { DishSlider } from '../../components/DishSlider'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import imgBanner from '../../assets/banner.png'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')

  //fetch categories
  useEffect(() => {
      api.get('category')
      .then(response => {
        setCategories(response.data)
      })
  },[])

  //check if is admin or user
  const { isAdmin } = useAuth()

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  return(
    <Container>
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onSearch={handleSearch}
        />
      <Header onOpenMenu={() => setMenuIsOpen(true)} onSearch={handleSearch} />
      <main>
        <div className="content">
          <Banner>
            <img src={imgBanner} alt="Banner" />
            <Text>
              <h1>Unmatched flavors</h1>
              <p>Feel the care of the selected ingredients</p>
            </Text>
          </Banner>
          {
            // do a map by category
            categories && categories.map((category,index) => (
              <div key={String(index)}>
                <div className='slider-section'>
                  <h2 className="subtitle">{category.name}</h2>
                    <DishSlider category_id={category.id} category_name={category.name} onSearch={search}/>
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