import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Update } from '../pages/Update'
import { Favourites } from '../pages/Favourites'
import { Cart } from '../pages/Cart'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="new/" element={<New />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="cart/" element={<Cart />} />
        </Routes>
    )
}