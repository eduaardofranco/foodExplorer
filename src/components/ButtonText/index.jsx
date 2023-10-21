import { Container } from './styles.js'
import { IoIosArrowBack } from 'react-icons/io'

export function ButtonText({ title, isBig, ...rest }) {
    return(
        <Container
        isbig={isBig.toString()}
        {...rest}
        >
            <IoIosArrowBack />
            {title}
        </Container>
    )
}