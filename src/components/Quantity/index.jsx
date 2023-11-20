import { Container } from './styles'
import { IoMdRemove } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/cart'

export function Quantity({ isbig, getQuantity, resetQuantity, ...rest }) {

    const [quantity, setQuantity] = useState(1)

    function increment() {
        setQuantity(quantity + 1);
        getQuantity(quantity + 1)
    }
    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity - 1);
            getQuantity(quantity - 1)
        }
    }
    useEffect(() => {
        //when add to cart, changes variable resetQuantity and reset quanttity component
        setQuantity(1)
        //set getQuantity to 1 also, this is the value addCart will get to multiply
        getQuantity(1)
    },[resetQuantity])

    return( 
        <Container $isbig={isbig} {...rest}>
            <div className="increments">
                <button onClick={decrement}>
                    <IoMdRemove />
                </button>
                    <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={increment }>
                    <AiOutlinePlus />
                </button>
            </div>
        </Container>
    )
}