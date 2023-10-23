import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Login() {
    return(
        <Container>
            <div className="logo">
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                        <path d="M11.2304 0L21.8881 6.15327V18.4598L11.2304 24.6131L0.572592 18.4598V6.15327L11.2304 0Z" fill="#065E7C"/>
                    </svg>
                    food explorer
                </h1>
            </div>
            <Form>
                <Input placeholder="email@email.com" label="E-mail"  bound="email" />
                <Input placeholder="min 6 characters" label="Password"  bound="password" />
                <Button title="Enter" />
            </Form>
            <a href="" className='newAccount'>Create Account</a>
        </Container>
    )
}