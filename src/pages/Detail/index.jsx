import { Container, Infos, Finalize, Ingredients, Description, Img } from './styles.js'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient'
import { PiReceipt } from 'react-icons/pi'
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

    const imageUrl = `${api.defaults.baseURL}/files/`

    const { addToCart, removeFromCart } = useCart()

    const params = useParams()
    const navigate = useNavigate()

    //verify is is admin, default comes false
    const { role = 'user' } = useAuth()
    let isAdmin = false
    if(role === 'admin') isAdmin = true

    function handleUpdate(id) {
        navigate(`/update/${id}`)
    }

    const getQuantity = (quantity) => {
        setQuantity(quantity)   
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`)
                setData(response.data)
            } catch(error) {
                if(error){
                    console.log(error.message)
                } else {
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
                                <h3>€{data.price}</h3>
                                <Description>{data.description}</Description>
                                <Ingredients>
                                    {
                                        data.ingredients &&
                                        data.ingredients.map((ingredient,index) => (
                                            <Ingredient name={ingredient.name} key={String(index)} />
                                        ))
                                    }
                                </ Ingredients>
                                <Finalize>
                                    {isAdmin ? '' : <Quantity isbig={true} getQuantity={getQuantity} />}
                                    {isAdmin ? <Button className="add-edit" title="Edit" onClick={() => handleUpdate(data.id)} /> : <Button className="add" title="Add" icon={PiReceipt} onClick={() => addToCart(data.id, quantity)} />}
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