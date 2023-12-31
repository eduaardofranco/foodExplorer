import { Container } from './styles.js'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export function ButtonText({ title, isBig = false, onClick, ...rest }) {
    const navigate = useNavigate()
    function handleBack(event) {
        event.preventDefault()
        navigate(-1)
    }
    return(
        <Container
        $isbig={isBig}
        {...rest}
        onClick={onClick ? onClick : (event) => handleBack(event)}
        >
            <IoIosArrowBack />
            {title}
        </Container>
    )
}