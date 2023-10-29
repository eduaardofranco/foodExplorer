import { Container, Infos, Finalize, Ingredients, Description, Img } from './styles.js'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient'
import { PiReceipt } from 'react-icons/pi'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { useState } from 'react'
 
export function Detail() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const user = "ad"
    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} isAddmin={user} />
            <main>
                <div className="content">
                    <ButtonText to="/" title="Back" isBig />
                    <div className="center">
                        <Img>
                            <img src="/src/assets/grande.png" alt="Prato" />
                        </Img>
                        <Infos>
                            <h1>Salada Ravanello</h1>
                            <h3>€15</h3>
                            <Description>
                                Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                            </Description>
                            <Ingredients>
                                <Ingredient name="Alface" />
                                <Ingredient name="cebola" />
                                <Ingredient name="pepino" />
                                <Ingredient name="pão naan" />
                                <Ingredient name="rabanete" />
                                <Ingredient name="tomate" />
                            </ Ingredients>
                            <Finalize>
                                {user == "admin" ? '' : <Quantity isbig={true} />}
                                {user == "admin" ? <Button className="add-edit" title="Edit" /> : <Button className="add" title="Add" icon={PiReceipt} />}
                            </ Finalize>
                        </Infos>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}