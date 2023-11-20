import { Container, H1, Link } from './styles'
import { TbError404 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function NotFound() {

    const { user } = useAuth()


    const navigate = useNavigate()
    return(
        <Container>
            <H1>
                <TbError404 />
                Page not Found
            </H1>
            <Link onClick={() => navigate('/')}>Back to {user ? "home" : "login"} </Link>
        </Container>
    )
}