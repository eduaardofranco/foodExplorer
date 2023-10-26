import { Container } from './styles'
import { Logo } from '../Logo'
import { GrMenu } from 'react-icons/gr'
import { PiReceipt } from 'react-icons/pi'
import { useState } from 'react';
import { SearchBar } from '../SearchBar'
import { Button } from '../Button'
import { FiLogOut } from 'react-icons/fi'

export function Header({ isAdmin, onOpenMenu }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return(
        <Container>
            <button className="menuBtn" onClick={onOpenMenu}>
                <GrMenu />
            </button>
            <Logo isAdmin={isAdmin} />
            <div className='ordersSmallBtn'>
                {isAdmin ? '' : <button><span>0</span><PiReceipt /></button>}
            </div>
            <div className="searchInput">
                <SearchBar placeholder="Search by dish or ingredient"  />
            </div>
            {isAdmin ? '' : <><a href="">Favourites</a><a href="">My Orders</a></>}
            {isAdmin ? <Button className="btnBig" title="New Dish" /> : <Button className="btnBig" icon="FiLogOut" title="Orders" />}
            <a className='logout'><FiLogOut /></a>
            
        </Container>
    )
}