import { Container } from './styles'

export function Footer() {
    return(
        <Container>
            <div className="content">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M9.76367 0.667969L19.29 5.16797V14.168L9.76367 18.668L0.237392 14.168V5.16797L9.76367 0.667969Z" fill="#4D585E"/>
                    </svg>
                    food explorer
                </div>
                <p>© 2023 - All rights reserved</p>
            </div>
        </Container>
    )
}