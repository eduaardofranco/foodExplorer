import { Container } from './styles'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ModalMessage({ message, title, navigation, confirmType = false, fncConfirm, onModalClose }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate()


    function handleConfirm() {
        fncConfirm()
    }
    function handleCancel() {
        setIsModalVisible(false)
        onModalClose && onModalClose();
    }

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
        }
    }, [message, title])
    
    
    useEffect(() => {
        //if modal is not confirm alert and is visible
        //set the timeout to close automatically
        if(!confirmType && isModalVisible) {
            
            // Automatically close the modal after a delay
            const modalTimeout = setTimeout(() => {
                setIsModalVisible(false);
                //if there is a navigation parameter, go for it
                navigation && navigate(navigation)
    
            }, 4000); // Auto-close after 4 seconds 
    
            // Clean up the timeout on unmount
            return () => clearTimeout(modalTimeout);
        }
        }, [isModalVisible]);

        if (!isModalVisible) {
            return null
        }
        return(
            <Container className={isModalVisible ? 'open' : 'close'}>
                <div>
                    <h3>{title}</h3>
                    <p>{message}</p>
                    {confirmType ?
                        <div>
                            <button className='cancel' onClick={handleCancel}>Cancel</button>
                            <button onClick={handleConfirm}>Confirm</button>
                        </div>
                        :
                        <button onClick={handleOkClick}>OK</button> }
                </div>
            </Container>
        )
}