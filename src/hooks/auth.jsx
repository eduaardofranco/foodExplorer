import { createContext, useContext } from "react";
import { useState } from "react";

import { api } from "../services/api";
import { ModalMessage } from '../components/ModalMessage'

export const AuthContext = createContext({})

function AuthProvider( { children }) {
    const [data, setData] = useState('')
    
    async function signIn( { email, password, setErrorMessage }) {

        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({ user, token })

        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error response data:', error.response.data.message); // Log the error response data
                setErrorMessage(error.response.data.message || 'Unknown error occurred.');
              } else if (error.message) {
                console.error('Error message:', error.message); // Log the error message
                setErrorMessage(error.message || 'Unknown error occurred.');
              } else {
                console.error('Unknown error:', error); // Log the unknown error
                alert('Error while logging in.');
              }
        }
    }


    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }