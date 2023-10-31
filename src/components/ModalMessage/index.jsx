import { Container } from './styles'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ModalMessage({ message, title, navigation }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigate = useNavigate()

    function handleOkClick() {
        setIsModalVisible(false)
        //if there is navigation and user clicks ok modal button
        //redirects to the page
        if(navigation) {
            navigate(navigation)
        }
    }

    useEffect(() => {
        // Automatically open the modal when it receives a message
        if (message) {
        setIsModalVisible(true);

        // Automatically close the modal after a delay
        const modalTimeout = setTimeout(() => {
            setIsModalVisible(false);
            //if there is a navigation parameter, go for it
            navigation && navigate(navigation)

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
                <button onClick={handleOkClick}>OK</button>
            </div>
        </Container>

    )
}