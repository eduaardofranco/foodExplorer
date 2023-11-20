import { Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'
import { NotFound } from '../pages/404'

export function AuthRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}