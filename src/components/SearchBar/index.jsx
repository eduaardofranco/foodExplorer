import { Container } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

export function SearchBar({ onClick, ...rest }) {
    return(
        <Container>
            <AiOutlineSearch />
            <input
            type="search"
            { ...rest}
            />
            <button onClick={onClick}><AiOutlineSearch /></button>

        </Container>
    )
}