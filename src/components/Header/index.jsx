import { Container } from './styles'
import { Logo } from '../Logo'
import { GrMenu } from 'react-icons/gr'
import { PiReceipt } from 'react-icons/pi'
import { useState } from 'react';
import { SearchBar } from '../SearchBar'
import { Button } from '../Button'
import { FiLogOut } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

export function Header({ onOpenMenu, onSearch }) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const { signOut } = useAuth()
    const { productsCart  } = useCart()

    const totalProductsInCart = Object.values(productsCart).reduce((total, currentValue) => total + currentValue, 0)


    function handleSignOut() {
        signOut()
        navigate('/')
    }
    function handleFavourites(e) {
        e.preventDefault()
        navigate('/favourites')
    }
    
    const { isAdmin } = useAuth()

    function handleNavigateHome() {
        navigate('/')
    }
    function handleNavigateOrders(e) {
        e.preventDefault()
        navigate('/orders')
    }

    function handleHeaderSearch(e) {
        setSearch(e.target.value);
        onSearch(e.target.value);
    }
    

    return(
        <Container>
            <div className="main-content">
                <button className="menuBtn" onClick={onOpenMenu}>
                    <GrMenu />
                </button>
                <Logo isAdmin={isAdmin} onClick={handleNavigateHome} />
                <div className='ordersSmallBtn'>
                    {isAdmin ? ''
                    :<button onClick={() => navigate('/cart')}>
                        <span>{totalProductsInCart}</span>
                        <PiReceipt />
                    </button>}
                </div>
                <div className="searchInput">
                    <SearchBar placeholder="Search by dish or ingredient" onChange={(e) => handleHeaderSearch(e)} />
                </div>
                {isAdmin ?
                <a href="" onClick={(e) => handleNavigateOrders(e)}>Orders</a>
                : 
                <>
                    <a href="" onClick={handleFavourites} >Favourites</a>
                    <a href="" onClick={(e) => handleNavigateOrders(e)}>My Orders</a>
                </>
                }
                
                {isAdmin ?
                <Link to="/new"><Button className="btnBig" title="New Dish" /></Link>
                : <Button
                    className="btnBig"
                    icon={PiReceipt}
                    title={`Cart (${totalProductsInCart})`}
                    onClick={() => navigate('/cart')}
                    />}
                <a className='logout' onClick={handleSignOut} ><FiLogOut /></a>
            </div>
            
        </Container>
    )
}