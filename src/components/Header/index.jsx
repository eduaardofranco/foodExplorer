import { Container } from './styles'
import { GrMenu } from 'react-icons/gr'
import { PiReceipt } from 'react-icons/pi'

export function Header({ isAdmin, onOpenMenu }) {
    return(
        <Container>
            <button onClick={onOpenMenu}>
                <GrMenu />
            </button>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                    <path d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z" fill="#065E7C"/>
                </svg>
                food explorer
                {isAdmin ? <span>admin</span> : ''}
            </h1>
            <button>
                {isAdmin ? '' : <><span>0</span><PiReceipt /></>}
            </button>
            
        </Container>
    )
}