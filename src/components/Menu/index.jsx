import { Container } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineLogout } from 'react-icons/hi'
import { Footer } from '../Footer'
import { SearchBar } from '../SearchBar'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Menu({ menuIsOpen, onCloseMenu }) {

    const { signOut, role } = useAuth()
    const navigate = useNavigate()

    //check if is admin
    let isAdmin = false
    if(role === 'admin') isAdmin = true

    function handleNavigate(event, path) {
        event.preventDefault()
        navigate(`/${path}`)
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
                    <SearchBar placeholder="Search by dish or ingredient"  />
                    <ul>
                        <li>
                            {isAdmin ? <a href="" onClick={(event) => handleNavigate(event, 'favourites')}>New Dish</a> : <a href="" onClick={(event) => handleNavigate(event, 'favourites')}>My Favourites</a>}
                        </li>
                        {!isAdmin ? <li><a href="" onClick={(event) => handleNavigate(event, 'orders')}>Orders</a></li> : null}
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