import { Container } from './styles'
import { useState, useEffect } from 'react';

export function ModalMessage({ message, title }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Automatically open the modal when it receives a message
        if (message) {
        setIsModalVisible(true);

        // Automatically close the modal after a delay
        const modalTimeout = setTimeout(() => {
            setIsModalVisible(false);
        }, 4000); // Auto-close after 4 seconds 

        // Clean up the timeout on unmount
        return () => clearTimeout(modalTimeout);
        }
    }, [message, title]);
    return(
        <Container className={isModalVisible ? 'open' : 'close'}>
            <div>
                <h3>{title}</h3>
                <p>{message}</p>
                <button onClick={() => setIsModalVisible(false)}>OK</button>
            </div>
        </Container>

    )
}