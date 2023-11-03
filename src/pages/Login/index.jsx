import { Container, Form } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Logo } from '../../components/Logo'
import { ValidationMessage } from '../../components/ValidationMessage'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const { signIn } = useAuth()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    function handleSignIn(e) {
        e.preventDefault()
        
        if(!email || !emailRegex.test(email)) {
            setErrorMessage('Inform a valid E-mail!');
            return
        }
        if(!password) {
            setErrorMessage('Password is Required!');
            return
        }
        
        setErrorMessage('')
        signIn({ email, password, setErrorMessage })
    }

    return(
        <Container>
            <div className="logo">
                <Logo />
            </div>
            <Form>
                <Title title="Login" />
                <Input
                    placeholder="email@email.com"
                    label="E-mail"
                    tyoe="email"
                    bound="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="min 6 characters"
                    type="password"
                    label="Password"
                    bound="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* if there is a error message, show it */}
                {errorMessage !== '' && (
                    <ValidationMessage message={errorMessage} />
                )}

                <Button title="Enter" onClick={handleSignIn} />
                <span className='loginOrNew'>
                    <Link to="/register">Create Account</Link>
                </span>
            </Form>
        </Container>
    )
}