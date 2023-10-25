import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Logo } from '../../components/Logo'

export function SignUp() {
    return(
        <Container>
            <div className="logo">
                <Logo />
            </div>
            <Form>
                <Title title="SignUp" />
                <Input placeholder="Your name" label="Name"  bound="name" />
                <Input placeholder="email@email.com" label="E-mail"  bound="email" />
                <Input placeholder="min 6 characters" label="Password"  bound="password" />
                <Input placeholder="min 6 characters" label="Repeat Password"  bound="repeatPassword" />
                <Button title="Enter" />
                <span className='loginOrNew'>
                    <a href="">Login</a>
                </span>
            </Form>
        </Container>
    )
}