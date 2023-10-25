import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import { Footer } from '../Footer'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'

export function Menu({ menuIsOpen, onCloseMenu }) {
    
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <div className="container">
                <div className="header">
                    <button>
                        <AiOutlineClose
                            onClick={onCloseMenu}
                        />
                    </button>
                    Menu
                </div>
                <div className="main">
                    <SearchBar placeholder="Search by dish or ingredient"  />
                    <ul>
                        <li><a href="">My Favourites</a></li>
                        <li><a href="">Orders</a></li>
                        <li>
                            <a href="">Logout <HiOutlineLogout /></a>
                            </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </Container>
    )
}