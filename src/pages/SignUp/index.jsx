import { Container, Form } from './styles'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Logo } from '../../components/Logo'
import { ModalMessage } from '../../components/ModalMessage'
import { ValidationMessage } from '../../components/ValidationMessage'
import { api } from '../../services/api'
import { ProgressBar } from '../../components/ProgessBar'

export function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [modalMessage, setModalMessage] = useState({ message: '', title: ''})
    const [sendingData, setSendingData] = useState(false)
    const [loadProgress, setLoadProgress] = useState(0)

    const navigate = useNavigate()
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    function handleSignUp(e) {
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
        
        if(!name) {
            return setErrorMessage('Name is Required!');
        }
        if(!email || !emailRegex.test(email)) {
            return setErrorMessage('Inform a valid E-mail!');
        }
        if(!password) {
            return setErrorMessage('Password is Required!');
        }
        if(password.length < 6) {
            return setErrorMessage('Password must have at least 6 characters');
        }
        if(!repeatPassword || repeatPassword !== password) {
            return setErrorMessage('Password does not match!');
        }
        
        //if validation pass, clear error message
        setErrorMessage('');


        api.post('/users', { name, email, password })
        .then(() => {
            clearInterval(intervalProgressBar)
            setLoadProgress(0)
            setModalMessage({ title: 'Sucess', message: 'User Created Sucessfully!', navigate: '/'})
            setSendingData(false)
        })
        .catch(error => {
            if(error.response) {
                return setModalMessage({ title: 'Error', message: error.response.data.message})
            }
            else {
                return setModalMessage({ title: 'Error', message: 'Error registering user'})
            }
        })
       
        
    }

    return(
        <Container>
            { loadProgress > 5 && <ProgressBar progress={loadProgress} /> }
            <div className="logo">
                <Logo />
            </div>
            <Form>
                <Title title="SignUp" />
                <Input
                    placeholder="Your name"
                    label="Name"
                    bound="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="email@email.com"
                    label="E-mail"
                    bound="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="min 6 characters"
                    label="Password" 
                    bound="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    placeholder="min 6 characters"
                    type="password"
                    label="Repeat Password"
                    bound="repeatPassword"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {/* if there is a error message, show it */}
                {errorMessage && (
                    <ValidationMessage message={errorMessage} isError={true} />
                )}

                <Button
                    title="Create"
                    onClick={handleSignUp}
                    disabled={sendingData ? 'disabled' : ''}
                />
                <span className='loginOrNew'>
                    <Link to="/">Login</Link>
                </span>
            </Form>
            <ModalMessage title={modalMessage.title} message={modalMessage.message} navigation={modalMessage.navigate} />
        </Container>
    )
}