import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Footer } from '../Footer'
import { SearchBar } from '../SerachBar'
import { useState } from 'react'

export function Menu({ menuIsOpen }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <div className="container">
                <div className="header">
                    <button>
                        <AiOutlineClose />
                    </button>
                    Menu
                </div>
                <div className="main">
                    <SearchBar placeholder="Search by dish or ingredient"  />
                    <ul>
                        <li><a href="">My Favourites</a></li>
                        <li><a href="">Orders</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </Container>
    )
}