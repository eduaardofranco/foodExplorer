import { Container, Infos, Finalize, Ingredients, Description, Img } from './styles.js'
import { Link, useParams } from 'react-router-dom'
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
 
export function Detail() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [data, setData] = useState(null)

    const imageUrl = `${api.defaults.baseURL}/files/`

    const params = useParams()

    //verify is is admin, default comes false
    const { role = 'user' } = useAuth()
    let isAdmin = false
    if(role === 'admin') isAdmin = true

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
                        <ButtonText to="/" title="Back" isBig />
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
                                    {isAdmin ? '' : <Quantity isbig={true} />}
                                    {isAdmin ? <Button className="add-edit" title="Edit" /> : <Button className="add" title="Add" icon={PiReceipt} />}
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