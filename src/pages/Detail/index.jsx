import { Container } from './styles.js'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'
import { Ingredient } from '../../components/Ingredient'
import { PiReceipt } from 'react-icons/pi'
import { Footer } from '../../components/Footer'
 
export function Detail() {
    const user = "admin"
    return(
        <Container>
            <Header />
            <main>
                <div className="content">
                <ButtonText title="Back" isbig />
                    <figure>
                        <img src="src/assets/grande.png" alt="Prato" />
                    </figure>
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
                        {user == "admin" ? <Button className="add" title="Edit" /> : <Button className="add" title="Add" icon={PiReceipt} />}
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}