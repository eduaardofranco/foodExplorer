import { Header } from '../../components/Header'
import { Container, Banner } from './styles'
import { Footer } from '../../components/Footer'
import { DishSlider } from '../../components/DishSlider'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishes, setDishes] = useState([])
  const categories = [
    {
      category: 'Meals',
      dishes: [
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 1',
          price: 'R$ 59,99',
          isFavourite: false,
        },
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 2',
          price: 'R$ 59,99',
          isFavourite: false,
        },
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 3',
          price: 'R$ 59,99',
          isFavourite: false,
        },
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 4',
          price: 'R$ 59,99',
          isFavourite: false,
        },
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 5',
          price: 'R$ 59,99',
          isFavourite: false,
        },
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 6',
          price: 'R$ 59,99',
          isFavourite: false,
        }

      ],
    },
    {
      category: 'Main Dishes',
      dishes: [
        {
          img: 'https://placehold.co/400x330',
          name: 'Spaguetti Gambe 1',
          price: 'R$ 49,99',
          isFavourite: true,
        },
        {
          img: '/src/assets/spagueti.png',
          name: 'Spaguetti Gambe 2',
          price: 'R$ 49,99',
          isFavourite: true,
        },
        {
          img: '/src/assets/spagueti.png',
          name: 'Spaguetti Gambe 3',
          price: 'R$ 49,99',
          isFavourite: true,
        }

      ],
    },
    // Add more categories with their respective dishes
  ];

  console.log(dishes)

useEffect(() => {
  async function fetchDishes() {
    const dishesData = await api.get('/dishes?name&ingredients')
    setDishes(dishesData.data)
  }
  
  fetchDishes()
}, [])

  return(
    <Container>
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} isAdmin />
      <main>
        <div className="content">
          <Banner>
            <img src="https://placehold.co/1920x300" alt="Banner" />
          </Banner>
          {dishes && dishes.map((dish, index) => (
             <div key={String(index)}>
                <DishSlider dishes={dish} sectionName={''} />
            </div>
         ))}
        </div>
        </main>
      <Footer />
    </Container>
  )
}