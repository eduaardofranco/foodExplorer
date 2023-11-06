import { Container } from './styles'
import { IoMdRemove } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

export function Quantity({ isbig, quantity, updatePrice, ...rest }) {

    function increment() {
        if(updatePrice) {
            updatePrice(quantity + 1);
        }
    }
    function decrement() {
        if(quantity > 1 && updatePrice) {
            updatePrice(quantity - 1);
        }
    }
    return(
        <Container isbig={isbig} {...rest}>
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