import { Container, ItemOrder } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DishList } from '../../components/DishList'
import { Menu } from '../../components/Menu' 
import { useState } from 'react'

export function Favourites() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <main>
                <Title title="My Favourites" />
                <DishList
                    name="House Burger"
                    btn="Remove from Favourites"
                    img="https://placehold.co/150x150"
                />
                <DishList
                    name="House Burger"
                    btn="Remove from Favourites"
                    img="https://placehold.co/150x150"
                />

            </main>


            <Footer />
        </Container>
    )
}