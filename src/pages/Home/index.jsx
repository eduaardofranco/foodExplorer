import { Header } from '../../components/Header'
import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { DishSlider } from '../../components/DishSlider'
import { Menu } from '../../components/Menu'
import { useState } from 'react'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const categories = [
    {
      category: 'Meals',
      dishes: [
        {
          img: '/src/assets/dish.png',
          name: 'Salada Ravanello 1',
          price: 'R$ 59,99',
          isFavourite: false,
          user: "admin"
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

  return(
    <Container>
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} isAddmin />
      <main>
        <div className="content">
          <div className="banner">
            <img src="https://placehold.co/1920x300" alt="Banner" />
          </div>
          {categories.map((category, index) => (
             <div key={index}>
                <DishSlider dishes={category.dishes} sectionName={category.category} />
            </div>
      ))}
        </div>
        </main>
      <Footer />
    </Container>
  )
}