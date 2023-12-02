import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { DishList } from '../../components/DishList'
import { Menu } from '../../components/Menu' 
import { useEffect, useState } from 'react'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { DishListSkeleton } from '../../components/Skeletons/DishListSkeleton'

export function Favourites() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [favourites, setFavourites] = useState([])
    const [dishes, setDishes] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(true)

    const imageUrl = `${api.defaults.baseURL}/files/`
    const navigate = useNavigate()

    const favouritesList = favourites.map(favourite => {
        const filteredFavourites = dishes.filter((dish) => favourite.dish_id === dish.id)
        return filteredFavourites
    })
    // Flatten the array all to same lavel
    const allFilteredFavourites = favouritesList.flat()

    async function handleRemoveFavourite(event, id) {
        event.preventDefault()
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
            try {
                api.get('favourites')
                .then(result => {
                    setFavourites(result.data)

                })
            } catch (error) {
                console.log('Error fetching favourites', error)
            }
    },[favourites])
    //fetch dishes
    useEffect(() => {
            try {
                setShowSkeleton(true)
                api.get('/dishes?name&ingredients')
                .then(result => {
                    setDishes(result.data)
                    setShowSkeleton(false)
                })
            } catch (error) {
                console.log('Error fetching Dishes', error)
            }
    },[])

    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            /> 
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <main>
                <ButtonText title="Back" />

                <Title title="My Favourites" />
                <div className="container">
                        {allFilteredFavourites.map((favourite, index) => (
                            <DishList
                                key={String(index)}
                                id={favourite.id}
                                name={favourite.name}
                                btnTitle="Remove from Favourites"
                                img={`${imageUrl}/${favourite.image}`}
                                onClickDetail={(event) => handleDetail(event, favourite.id)}
                                onClick={((event) => handleRemoveFavourite(event, favourite.id))}
                            />
                        ))
                    }
                    {
                        // show when no favourites, checks array size and if showSkeleton is false that means fetch finished
                        allFilteredFavourites.length <= 0 && !showSkeleton && (
                            <h2>No Favourites yet</h2>

                        ) 
                    }
                    
                    {
                        showSkeleton && [1,2,3,].map(index => (
                            <DishListSkeleton key={index}/>
                        ))
                    }

                </div>

            </main>


            <Footer />
        </Container>
    )
}