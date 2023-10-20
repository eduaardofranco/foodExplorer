import { Container } from './styles.js'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Quantity } from '../../components/Quantity'
import { Button } from '../../components/Button'

export function Detail() {
    return(
        <Container>
            <Header />
            <main>
                <ButtonText title="Back" isbig="true" />
                <div className="content">
                    <figure>
                        <img src="src/assets/grande.png" alt="Prato" />
                    </figure>
                    <h1>Salada Ravanello</h1>
                    <p className="description">
                    Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                    </p>
                    <div className="ingredients">
                        <span>Alface</span>
                        <span>cebola</span>
                        <span>pepino</span>
                        <span>pão naan</span>
                        <span>rabanete</span>
                        <span>tomate</span>
                    </div>
                    <div className="finalize">
                        <Quantity isbig={true} />
                        <Button title="Add" />
                    </div>
                </div>
            </main>
        </Container>
    )
}