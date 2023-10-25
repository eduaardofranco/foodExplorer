import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Logo } from '../../components/Logo'

export function Login() {
    return(
        <Container>
            <div className="logo">
                <Logo />
            </div>
            <Form>
                <Title title="Login" />
                <Input placeholder="email@email.com" label="E-mail"  bound="email" />
                <Input placeholder="min 6 characters" label="Password"  bound="password" />
                <Button title="Enter" />
                <a href="" className='newAccount'>Create Account</a>
            </Form>
        </Container>
    )
}