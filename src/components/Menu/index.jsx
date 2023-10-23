import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Footer } from '../Footer'

export function Menu() {
    return(
        <Container>
            <div className="container">
                <div className="header">
                    <button>
                        <AiOutlineClose />
                    </button>
                    Menu
                </div>
            </div>
            <Footer />
        </Container>
    )
}