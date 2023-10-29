import { Container } from './styles.js'
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
    const user = "admsin"
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
                        <figure>
                            <img src="/src/assets/grande.png" alt="Prato" />
                        </figure>
                        <div className="infos">
                            <h1>Salada Ravanello</h1>
                            <h3>€15</h3>
                            <p className="description">
                            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                            </p>
                            <div className="ingredients">
                                <Ingredient name="Alface" />
                                <Ingredient name="cebola" />
                                <Ingredient name="pepino" />
                                <Ingredient name="pão naan" />
                                <Ingredient name="rabanete" />
                                <Ingredient name="tomate" />
                            </div>
                            <div className="finalize">
                                {user == "admin" ? '' : <Quantity isbig={true} />}
                                {user == "admin" ? <Button className="add-edit" title="Edit" /> : <Button className="add" title="Add" icon={PiReceipt} />}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}