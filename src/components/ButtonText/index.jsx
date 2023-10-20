import { Container } from './styles.js'
import { IoIosArrowBack } from 'react-icons/io'

export function ButtonText({ title, isbig, ...rest }) {
    return(
        <Container
        isbig={isbig}
        {...rest}
        >
            <IoIosArrowBack />
            {title}
        </Container>
    )
}