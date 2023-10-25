import { Container } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

export function SearchBar({ ...rest }) {
    return(
        <Container>
            <AiOutlineSearch />
            <input
            type="search"
            { ...rest}
            />

        </Container>
    )
}