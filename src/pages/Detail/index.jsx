import { Container, Infos, Finalize, Ingredients, Description, Img } from './styles.js'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient'
import { IoMdCart } from 'react-icons/io'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { useAuth } from '../../hooks/auth.jsx'
import { useCart } from '../../hooks/cart.jsx'
 
export function Detail() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [data, setData] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [resetQuantity, setResetQuantity] = useState(1)
    const [addItemClicked, setAddItemClicked] = useState(false)

    const imageUrl = `${api.defaults.baseURL}/files/`

    const { addToCart, removeFromCart } = useCart()

    const params = useParams()
    const navigate = useNavigate()

    //verify is is admin, default comes false
    const { isAdmin } = useAuth()

    function handleUpdate(id) {
        navigate(`/update/${id}`)
    }

    const getQuantity = (quantity) => {
        setQuantity(quantity)   
    }

    function handleAddToCart(id, quantity) {
        addToCart(id, quantity)

        setAddItemClicked(true)
        //remove class after 2.5s
        setTimeout(() => {
            //reset quantity component after 2.5s added
            setAddItemClicked(false)
            setResetQuantity((prev) => prev + 1)
        },2500)
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`)
                setData(response.data)
            } catch(error) {
                if(error){
                    navigate('/404')
                    console.log(error.message)
                } else {
                    navigate('/404')
                    console.log('Fail to fetch')
                }
            }
        }
        fetchDish()
    },[])

    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            {
                data && 
                <main>
                    <div className="content">
                        <ButtonText title="Back" isBig />
                        <div className="center">
                            <Img>
                                <img src={`${imageUrl}/${data.image}`} alt={data.name} />
                            </Img>
                            <Infos>
                                <h1>{data.name}</h1>
                                <h3>€{data.price.toFixed(2)}</h3>
                                <Description>{data.description}</Description>
                                <Ingredients>
                                    {
                                        data.ingredients &&
                                        data.ingredients.map((ingredient,index) => (
                                            <Ingredient name={ingredient.name} key={String(index)} />
                                        ))
                                    }
                                </ Ingredients>
                                <Finalize className={isAdmin ? 'edit' : ''}> 
                                    {isAdmin ? '' : <Quantity isbig={true} getQuantity={getQuantity} resetQuantity={resetQuantity} />}
                                    {isAdmin ?
                                        <Button className="add-edit" title="Edit" onClick={() => handleUpdate(data.id)} />
                                        :
                                        <Button
                                            className={addItemClicked ? 'added-cart add' : 'add'}
                                            title="Add"
                                            icon={IoMdCart}
                                            onClick={() => handleAddToCart(data.id, quantity)}
                                            disabled={addItemClicked ? 'disabled' : null}
                                        >
                                            <span className='added'>{quantity} Added</span>
                                        </Button>}
                                </ Finalize>
                            </Infos>
                        </div>
                    </div>
                </main>
            }
            <Footer />
        </Container>
    )
}