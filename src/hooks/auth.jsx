import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { api } from "../services/api";
import { ModalMessage } from '../components/ModalMessage'

export const AuthContext = createContext({ user: null, role: null })

function AuthProvider( { children }) {
    const [data, setData] = useState('')
    
    async function signIn( { email, password, setErrorMessage }) {

        try {
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data


            localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
            localStorage.setItem('@foodexplorer:token', token)


            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
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

    
    function signOut() {
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')

        setData({})
    }

    useEffect(() => {

        const token = localStorage.getItem('@foodexplorer:token')
        const user = localStorage.getItem('@foodexplorer:user')
        
        function checkTokenIsExpired(token) {
            //if there is a token in localstorage
            if(token) {

                try {
                    const decoded = jwtDecode(token);
                    const currentTime = Math.floor(Date.now() / 1000); // convert to seconds
                
                    // Check if the expiration time is defined and bigger than the current time
                    if (decoded.exp && decoded.exp > currentTime) {
                      return true;
                    }  
                    //token is invalid
                    return false;
                  } catch (error) {
                    // Handle decoding errors
                    console.error('Error decoding token:', error);
                    signOut();
                    return true;
                  }
            }
        }
        
        const tokenIsValid = checkTokenIsExpired(token)


        //if there is token & user in localstorage, set to headres request and data
        if(token && tokenIsValid && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[])


    return(
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            user: data.user,
            role: data.user?.role || 'user', // Include the user's role or set to user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }