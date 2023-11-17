import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DishList } from '../../components/DishList'
import { Menu } from '../../components/Menu' 
import { useEffect, useState } from 'react'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function Favourites() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [favourites, setFavourites] = useState([])
    const [dishes, setDishes] = useState([])

    const imageUrl = `${api.defaults.baseURL}/files/`

    const favouritesList = favourites.map(favourite => {
        const filteredFavourites = dishes.filter((dish) => favourite.dish_id === dish.id)
        return filteredFavourites
    })
    // Flatten the array all to same lavel
    const allFilteredFavourites = favouritesList.flat()

    async function handleRemoveFavourite(id) {
        try {
            await api.delete(`favourites/${id}`)

            // Refetch the updated list of favorites
            const updatedFavorites = await api.get('/favourites');
    
            // Update your local state with the new list of favorites
            setFavourites(updatedFavorites.data);
        } catch (error) {
            console.log('error deleting favourite', error)
        }
    }

    //fetch favourites
    useEffect(() => {
        async function fetchFavourites() {
            try {
                const result = await api.get('favourites')
                setFavourites(result.data)
                // console.log(result.data)
            } catch (error) {
                console.log('Error fetching favourites', error)
            }
        }
        fetchFavourites()
    },[favourites])
    //fetch dishes
    useEffect(() => {
        async function fetchDishes() {
            try {
                const result = await api.get('/dishes?name&ingredients')
                setDishes(result.data)
            } catch (error) {
                console.log('Error fetching Dishes', error)
            }
        }
        fetchDishes()
    },[])

    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            /> 
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <main>
                <ButtonText to="/" title="Back" />

                <Title title="My Favourites" />
                <div className="container">
                    {allFilteredFavourites.length > 0 ? 
                        allFilteredFavourites.map((favourite, index) => (
                            <DishList
                                key={String(index)}
                                name={favourite.name}
                                btn="Remove from Favourites"
                                img={`${imageUrl}/${favourite.image}`}
                                onClick={(() => handleRemoveFavourite(favourite.id))}
                            />
                        ))
                    : 
                    <h2>No Favourites yet</h2>
                    }

                </div>

            </main>


            <Footer />
        </Container>
    )
}