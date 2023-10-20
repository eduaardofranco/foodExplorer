import { Container } from './styles'
import { IoMdRemove } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'

export function Quantity({ isbig, ...rest }) {
    return(
        <Container isbig={isbig} {...rest}>
            <div className="increments">
                <button>
                    <IoMdRemove />
                </button>
                    <span>01</span>
                <button>
                    <AiOutlinePlus />
                </button>
            </div>
        </Container>
    )
}