import { Container, Form } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Logo } from '../../components/Logo'
import { ValidationMessage } from '../../components/ValidationMessage'
import { ProgressBar } from '../../components/ProgessBar'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [sendingData, setSendingData] = useState(false)
    const [loadProgress, setLoadProgress] = useState(0)

    const { signIn } = useAuth()

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    function handleSignIn(e) {
        e.preventDefault()

        setSendingData(true)

        //set and show progressbar
        const intervalProgressBar = setInterval(() => {
           setLoadProgress((prev) => {
               const nextProgress = prev + 10;
               if (nextProgress === 110) {
                   return 10;
               }
               return nextProgress;
           })
        }, 500);
        
        if(!email || !emailRegex.test(email)) {
            setErrorMessage('Inform a valid E-mail!');
            clearInterval(intervalProgressBar)
            setSendingData(false)
            return
        }
        if(!password) {
            setErrorMessage('Password is Required!');
            clearInterval(intervalProgressBar)
            setSendingData(false)
            return
        }
        
        setErrorMessage('')
        signIn({ email, password, setErrorMessage })
        .then(() => {
            clearInterval(intervalProgressBar)
            setLoadProgress(0)
            setSendingData(false)
        })
    }

    return(
        <Container>
            { loadProgress > 5 && <ProgressBar progress={loadProgress} /> }
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
                    placeholder="password"
                    type="password"
                    label="Password"
                    bound="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* if there is a error message, show it */}
                {errorMessage !== '' && (
                    <ValidationMessage message={errorMessage} />
                )}

                <Button
                    title="Enter"
                    onClick={handleSignIn}
                    disabled={sendingData ? 'disabled' : ''}
                />

                <span className='loginOrNew'>
                    <Link to="/register">Create Account</Link>
                </span>
            </Form>
        </Container>
    )
}