import { Container } from './styles'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai' 

export function AddIngredient({ value, isNew = false, onClick, ...rest}) {
    return(
        <Container $isnew={isNew}>
            <input value={value} type="text" { ...rest } />
            <button
                type="button"
                className={ isNew ? 'button-add' : 'button-remove'}
                onClick={onClick}
                readOnly={!isNew}
            >
                { isNew ? <AiOutlinePlus /> : <AiOutlineClose /> }
            </button>
        </Container>
    )
}