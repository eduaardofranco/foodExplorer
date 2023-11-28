import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import { Footer } from '../Footer'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Menu({ menuIsOpen, onCloseMenu, onSearch }) {

    const { signOut, isAdmin } = useAuth()
    const navigate = useNavigate()


    function handleNavigate(event, path) {
        event.preventDefault()
        navigate(`/${path}`)
    }

    function handleHeaderSearch(e) {
        onSearch(e.target.value);
    }
    
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
                    <SearchBar placeholder="Search by dish or ingredient" onClick={onCloseMenu} onChange={(e) => handleHeaderSearch(e)}/>
                    <ul>
                        <li>
                            {
                                isAdmin ?
                                <a href="" onClick={(event) => handleNavigate(event, 'new')}>New Dish</a>
                                :
                                <a href="" onClick={(event) => handleNavigate(event, 'favourites')}>My Favourites</a>}
                        </li>
                        <li><a href="" onClick={(event) => handleNavigate(event, 'orders')}>Orders</a></li>
                        <li>
                            <a href="" onClick={signOut}>Logout <HiOutlineLogout /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </Container>
    )
}