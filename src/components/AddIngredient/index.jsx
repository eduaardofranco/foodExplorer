import { Container } from './styles'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai' 

export function AddIngredient({ value, isNew = false, onClick, ...rest}) {
    return(
        <Container $isnew={isNew}>
            <input
                value={value}
                type="text"
                readOnly={!isNew}
                { ...rest }
            />
            <button
                type="button"
                onClick={onClick}
            >
                { isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }
            </button>
        </Container>
    )
}