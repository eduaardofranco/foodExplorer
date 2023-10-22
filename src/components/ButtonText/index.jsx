import { Container } from './styles.js'
import { IoIosArrowBack } from 'react-icons/io'

export function ButtonText({ title, isBig = false, ...rest }) {
    return(
        <Container
        $isbig={isBig.toString()}
        {...rest}
        >
            <IoIosArrowBack />
            {title}
        </Container>
    )
}