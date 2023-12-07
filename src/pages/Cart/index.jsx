import { Container, PaymentSection, PaymentForm } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { DishList } from '../../components/DishList'
import { useCart } from '../../hooks/cart'
import { ButtonText } from '../../components/ButtonText'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPix, FaRegClock } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { api } from '../../services/api'
import { ModalMessage } from '../../components/ModalMessage'
import { DishListSkeleton } from '../../components/Skeletons/DishListSkeleton'
import { Menu } from '../../components/Menu'

export function Cart() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [dishes, setDishes] = useState([])
    const [paymentType, setPaymentType] = useState('pix')
    const [paymentSucess, setPaymentSucess] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [showOrder, setShowOrder] = useState(true)
    const [modalMessage, setModalMessage] = useState({ message: '', title: ''})
    const [showSkeleton, setShowSkeleton] = useState(false)

    const { productsCart, removeFromCart, getTotalCartAmount, emptyCart } = useCart()

    const navigate = useNavigate()
    let orderDescription = []

    
    let totalAmount = getTotalCartAmount()

    const imageUrl = `${api.defaults.baseURL}/files/`

    function handlePayment(type) {
        switch (type) {
            case 'pix':
                return setPaymentType('pix');
            case 'card':
                return setPaymentType('card')
        }
    }
    //when user submit card details for payment
    async function handleSendPayment(e) {
        e.preventDefault()

        dishes.map((dish, index) => {
            //check if there are same id in cart and dishes
            const isInCart = productsCart[dish.id] !== undefined;
            if(isInCart) {
                const quantityInCart = productsCart[dish.id];
                //insert order description in variable for posting it later
                orderDescription.push(` ${quantityInCart}x ${dish.name}`)
            }
        })
        //convert to string
        const orderDescriptionString = String(orderDescription)
        try{
            await api.post('/orders', {description: orderDescriptionString})
            setPaymentSucess(true)
            //show message when place order
            setModalMessage({ title: 'Order placed', message: 'Your orders is in the kitchen now', navigate: '/orders' });
            //empty cart
            emptyCart()
        } catch(error) {
            if(error) {
                setModalMessage({ title: 'Error placing order', message: 'There was an error placing yor order', navigate: '/' });
                console.log('Error placing order: ',error)
            }
            else {
                console.log('Error placing order')
            }
        }
    }

    function handleShowPayment() {
        setShowPayment(true)
        setShowOrder(false)
    }

    //fetch dishes
    useEffect(() => {
        setShowSkeleton(true)
        api.get('/dishes')
        .then(response => {
            setDishes(response.data)
            setShowSkeleton(false)
        }).catch(error => {
            console.log('Error fetching diches: ', error)
        })

        //check window width and show payment if > 767px
        if(window.innerWidth > '1023') {
            setShowPayment(true)
        }
    },[])

    return(
        <Container>
            <Menu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <main>
                <ButtonText title="Back" />
                <div className="wraper-contantainer">
                    {
                        showOrder &&
                        <div className="my-order">
                            <Title title="My Order" />
                            {Object.keys(productsCart).length > 0 ?
                            
                            <>
                                {dishes.map((dish, index) => {
                                    //check if there are same id in cart and dishes
                                    const isInCart = productsCart[dish.id] !== undefined;
                                    if(isInCart) {
                                        const quantityInCart = productsCart[dish.id];

                                        return (
                                            <DishList
                                                id={dish.id}
                                                key={String(index)}
                                                name={dish.name}
                                                btnTitle="Remove"
                                                img={imageUrl + dish.image}
                                                quantity={quantityInCart}
                                                price={dish.price.toFixed(2)}
                                                onClick={() => removeFromCart(dish.id)}
                                            />
                                        )
                                    }

                                })}
                                {
                                    showSkeleton && [1,2,3].map(index => (
                                        <DishListSkeleton />
                                    ))
                                }
                                {
                                    totalAmount && <h2>Total: €{totalAmount.toFixed(2)}</h2>
                                }

                                
                                <div className="finalize">
                                    <Button title="Next" onClick={handleShowPayment} />
                                </div>
                            </>
                            : 
                            <h2>Cart is Empty</h2>
                            }
                        
                        </div>
                    }
                    {/* show payment if there is products in cart */}
                    {
                        showPayment && Object.keys(productsCart).length > 0 &&
                        <PaymentSection>
                            <h2>Payment</h2>
                            <PaymentForm>
                                <div className="header">
                                    <p
                                        onClick={() => handlePayment('pix')}
                                        className={paymentType == 'pix' ? 'active' : null}
                                    >
                                        <FaPix />
                                        PIX
                                    </p>
                                    <p
                                        onClick={() => handlePayment('card')}
                                        className={paymentType == 'card' ? 'active' : null}
                                    >
                                        <FaRegCreditCard />
                                        Card
                                    </p>
                                </div>
                                <div className="body">
                                    {/* if payment type is pix, show this section */}
                                    {
                                        paymentType === 'pix' && paymentSucess == false &&
                                        <div className="pix">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="181" height="181" viewBox="0 0 181 181" fill="none">
                                                <g clipPath="url(#clip0_448_2984)">
                                                <path d="M180.415 0.303833H0.584961V180.134H180.415V0.303833Z" fill="#00070A"/>
                                                <path d="M7.24512 6.96423H13.9055V13.6246H7.24512V6.96423ZM13.9055 6.96423H20.5659V13.6246H13.9055V6.96423ZM20.5659 6.96423H27.2262V13.6246H20.5659V6.96423ZM27.2262 6.96423H33.8866V13.6246H27.2262V6.96423ZM33.8866 6.96423H40.547V13.6246H33.8866V6.96423ZM40.547 6.96423H47.2074V13.6246H40.547V6.96423ZM47.2074 6.96423H53.8678V13.6246H47.2074V6.96423ZM67.1885 6.96423H73.8489V13.6246H67.1885V6.96423ZM93.83 6.96423H100.49V13.6246H93.83V6.96423ZM127.132 6.96423H133.792V13.6246H127.132V6.96423ZM133.792 6.96423H140.453V13.6246H133.792V6.96423ZM140.453 6.96423H147.113V13.6246H140.453V6.96423ZM147.113 6.96423H153.773V13.6246H147.113V6.96423ZM153.773 6.96423H160.434V13.6246H153.773V6.96423ZM160.434 6.96423H167.094V13.6246H160.434V6.96423ZM167.094 6.96423H173.755V13.6246H167.094V6.96423ZM7.24512 13.6246H13.9055V20.285H7.24512V13.6246ZM47.2074 13.6246H53.8678V20.285H47.2074V13.6246ZM60.5281 13.6246H67.1885V20.285H60.5281V13.6246ZM67.1885 13.6246H73.8489V20.285H67.1885V13.6246ZM80.5093 13.6246H87.1696V20.285H80.5093V13.6246ZM87.1696 13.6246H93.83V20.285H87.1696V13.6246ZM93.83 13.6246H100.49V20.285H93.83V13.6246ZM100.49 13.6246H107.151V20.285H100.49V13.6246ZM107.151 13.6246H113.811V20.285H107.151V13.6246ZM127.132 13.6246H133.792V20.285H127.132V13.6246ZM167.094 13.6246H173.755V20.285H167.094V13.6246ZM7.24512 20.285H13.9055V26.9454H7.24512V20.285ZM20.5659 20.285H27.2262V26.9454H20.5659V20.285ZM27.2262 20.285H33.8866V26.9454H27.2262V20.285ZM33.8866 20.285H40.547V26.9454H33.8866V20.285ZM47.2074 20.285H53.8678V26.9454H47.2074V20.285ZM67.1885 20.285H73.8489V26.9454H67.1885V20.285ZM73.8489 20.285H80.5093V26.9454H73.8489V20.285ZM80.5093 20.285H87.1696V26.9454H80.5093V20.285ZM100.49 20.285H107.151V26.9454H100.49V20.285ZM127.132 20.285H133.792V26.9454H127.132V20.285ZM140.453 20.285H147.113V26.9454H140.453V20.285ZM147.113 20.285H153.773V26.9454H147.113V20.285ZM153.773 20.285H160.434V26.9454H153.773V20.285ZM167.094 20.285H173.755V26.9454H167.094V20.285ZM7.24512 26.9454H13.9055V33.6057H7.24512V26.9454ZM20.5659 26.9454H27.2262V33.6057H20.5659V26.9454ZM27.2262 26.9454H33.8866V33.6057H27.2262V26.9454ZM33.8866 26.9454H40.547V33.6057H33.8866V26.9454ZM47.2074 26.9454H53.8678V33.6057H47.2074V26.9454ZM60.5281 26.9454H67.1885V33.6057H60.5281V26.9454ZM67.1885 26.9454H73.8489V33.6057H67.1885V26.9454ZM80.5093 26.9454H87.1696V33.6057H80.5093V26.9454ZM93.83 26.9454H100.49V33.6057H93.83V26.9454ZM100.49 26.9454H107.151V33.6057H100.49V26.9454ZM107.151 26.9454H113.811V33.6057H107.151V26.9454ZM113.811 26.9454H120.472V33.6057H113.811V26.9454ZM127.132 26.9454H133.792V33.6057H127.132V26.9454ZM140.453 26.9454H147.113V33.6057H140.453V26.9454ZM147.113 26.9454H153.773V33.6057H147.113V26.9454ZM153.773 26.9454H160.434V33.6057H153.773V26.9454ZM167.094 26.9454H173.755V33.6057H167.094V26.9454ZM7.24512 33.6057H13.9055V40.2661H7.24512V33.6057ZM20.5659 33.6057H27.2262V40.2661H20.5659V33.6057ZM27.2262 33.6057H33.8866V40.2661H27.2262V33.6057ZM33.8866 33.6057H40.547V40.2661H33.8866V33.6057ZM47.2074 33.6057H53.8678V40.2661H47.2074V33.6057ZM73.8489 33.6057H80.5093V40.2661H73.8489V33.6057ZM87.1696 33.6057H93.83V40.2661H87.1696V33.6057ZM113.811 33.6057H120.472V40.2661H113.811V33.6057ZM127.132 33.6057H133.792V40.2661H127.132V33.6057ZM140.453 33.6057H147.113V40.2661H140.453V33.6057ZM147.113 33.6057H153.773V40.2661H147.113V33.6057ZM153.773 33.6057H160.434V40.2661H153.773V33.6057ZM167.094 33.6057H173.755V40.2661H167.094V33.6057ZM7.24512 40.2661H13.9055V46.9265H7.24512V40.2661ZM47.2074 40.2661H53.8678V46.9265H47.2074V40.2661ZM60.5281 40.2661H67.1885V46.9265H60.5281V40.2661ZM73.8489 40.2661H80.5093V46.9265H73.8489V40.2661ZM100.49 40.2661H107.151V46.9265H100.49V40.2661ZM107.151 40.2661H113.811V46.9265H107.151V40.2661ZM127.132 40.2661H133.792V46.9265H127.132V40.2661ZM167.094 40.2661H173.755V46.9265H167.094V40.2661ZM7.24512 46.9265H13.9055V53.5869H7.24512V46.9265ZM13.9055 46.9265H20.5659V53.5869H13.9055V46.9265ZM20.5659 46.9265H27.2262V53.5869H20.5659V46.9265ZM27.2262 46.9265H33.8866V53.5869H27.2262V46.9265ZM33.8866 46.9265H40.547V53.5869H33.8866V46.9265ZM40.547 46.9265H47.2074V53.5869H40.547V46.9265ZM47.2074 46.9265H53.8678V53.5869H47.2074V46.9265ZM60.5281 46.9265H67.1885V53.5869H60.5281V46.9265ZM73.8489 46.9265H80.5093V53.5869H73.8489V46.9265ZM87.1696 46.9265H93.83V53.5869H87.1696V46.9265ZM100.49 46.9265H107.151V53.5869H100.49V46.9265ZM113.811 46.9265H120.472V53.5869H113.811V46.9265ZM127.132 46.9265H133.792V53.5869H127.132V46.9265ZM133.792 46.9265H140.453V53.5869H133.792V46.9265ZM140.453 46.9265H147.113V53.5869H140.453V46.9265ZM147.113 46.9265H153.773V53.5869H147.113V46.9265ZM153.773 46.9265H160.434V53.5869H153.773V46.9265ZM160.434 46.9265H167.094V53.5869H160.434V46.9265ZM167.094 46.9265H173.755V53.5869H167.094V46.9265ZM87.1696 53.5869H93.83V60.2473H87.1696V53.5869ZM100.49 53.5869H107.151V60.2473H100.49V53.5869ZM7.24512 60.2473H13.9055V66.9076H7.24512V60.2473ZM13.9055 60.2473H20.5659V66.9076H13.9055V60.2473ZM20.5659 60.2473H27.2262V66.9076H20.5659V60.2473ZM27.2262 60.2473H33.8866V66.9076H27.2262V60.2473ZM33.8866 60.2473H40.547V66.9076H33.8866V60.2473ZM47.2074 60.2473H53.8678V66.9076H47.2074V60.2473ZM53.8678 60.2473H60.5281V66.9076H53.8678V60.2473ZM60.5281 60.2473H67.1885V66.9076H60.5281V60.2473ZM67.1885 60.2473H73.8489V66.9076H67.1885V60.2473ZM73.8489 60.2473H80.5093V66.9076H73.8489V60.2473ZM87.1696 60.2473H93.83V66.9076H87.1696V60.2473ZM93.83 60.2473H100.49V66.9076H93.83V60.2473ZM100.49 60.2473H107.151V66.9076H100.49V60.2473ZM107.151 60.2473H113.811V66.9076H107.151V60.2473ZM120.472 60.2473H127.132V66.9076H120.472V60.2473ZM133.792 60.2473H140.453V66.9076H133.792V60.2473ZM147.113 60.2473H153.773V66.9076H147.113V60.2473ZM160.434 60.2473H167.094V66.9076H160.434V60.2473ZM27.2262 66.9076H33.8866V73.568H27.2262V66.9076ZM33.8866 66.9076H40.547V73.568H33.8866V66.9076ZM40.547 66.9076H47.2074V73.568H40.547V66.9076ZM53.8678 66.9076H60.5281V73.568H53.8678V66.9076ZM67.1885 66.9076H73.8489V73.568H67.1885V66.9076ZM93.83 66.9076H100.49V73.568H93.83V66.9076ZM100.49 66.9076H107.151V73.568H100.49V66.9076ZM113.811 66.9076H120.472V73.568H113.811V66.9076ZM120.472 66.9076H127.132V73.568H120.472V66.9076ZM133.792 66.9076H140.453V73.568H133.792V66.9076ZM147.113 66.9076H153.773V73.568H147.113V66.9076ZM33.8866 73.568H40.547V80.2284H33.8866V73.568ZM40.547 73.568H47.2074V80.2284H40.547V73.568ZM47.2074 73.568H53.8678V80.2284H47.2074V73.568ZM60.5281 73.568H67.1885V80.2284H60.5281V73.568ZM67.1885 73.568H73.8489V80.2284H67.1885V73.568ZM80.5093 73.568H87.1696V80.2284H80.5093V73.568ZM87.1696 73.568H93.83V80.2284H87.1696V73.568ZM107.151 73.568H113.811V80.2284H107.151V73.568ZM120.472 73.568H127.132V80.2284H120.472V73.568ZM127.132 73.568H133.792V80.2284H127.132V73.568ZM133.792 73.568H140.453V80.2284H133.792V73.568ZM153.773 73.568H160.434V80.2284H153.773V73.568ZM160.434 73.568H167.094V80.2284H160.434V73.568ZM167.094 73.568H173.755V80.2284H167.094V73.568ZM7.24512 80.2284H13.9055V86.8888H7.24512V80.2284ZM13.9055 80.2284H20.5659V86.8888H13.9055V80.2284ZM20.5659 80.2284H27.2262V86.8888H20.5659V80.2284ZM40.547 80.2284H47.2074V86.8888H40.547V80.2284ZM67.1885 80.2284H73.8489V86.8888H67.1885V80.2284ZM73.8489 80.2284H80.5093V86.8888H73.8489V80.2284ZM80.5093 80.2284H87.1696V86.8888H80.5093V80.2284ZM113.811 80.2284H120.472V86.8888H113.811V80.2284ZM127.132 80.2284H133.792V86.8888H127.132V80.2284ZM160.434 80.2284H167.094V86.8888H160.434V80.2284ZM13.9055 86.8888H20.5659V93.5491H13.9055V86.8888ZM33.8866 86.8888H40.547V93.5491H33.8866V86.8888ZM47.2074 86.8888H53.8678V93.5491H47.2074V86.8888ZM53.8678 86.8888H60.5281V93.5491H53.8678V86.8888ZM67.1885 86.8888H73.8489V93.5491H67.1885V86.8888ZM80.5093 86.8888H87.1696V93.5491H80.5093V86.8888ZM87.1696 86.8888H93.83V93.5491H87.1696V86.8888ZM93.83 86.8888H100.49V93.5491H93.83V86.8888ZM100.49 86.8888H107.151V93.5491H100.49V86.8888ZM127.132 86.8888H133.792V93.5491H127.132V86.8888ZM140.453 86.8888H147.113V93.5491H140.453V86.8888ZM147.113 86.8888H153.773V93.5491H147.113V86.8888ZM153.773 86.8888H160.434V93.5491H153.773V86.8888ZM160.434 86.8888H167.094V93.5491H160.434V86.8888ZM7.24512 93.5491H13.9055V100.21H7.24512V93.5491ZM13.9055 93.5491H20.5659V100.21H13.9055V93.5491ZM33.8866 93.5491H40.547V100.21H33.8866V93.5491ZM53.8678 93.5491H60.5281V100.21H53.8678V93.5491ZM67.1885 93.5491H73.8489V100.21H67.1885V93.5491ZM73.8489 93.5491H80.5093V100.21H73.8489V93.5491ZM87.1696 93.5491H93.83V100.21H87.1696V93.5491ZM100.49 93.5491H107.151V100.21H100.49V93.5491ZM133.792 93.5491H140.453V100.21H133.792V93.5491ZM147.113 93.5491H153.773V100.21H147.113V93.5491ZM153.773 93.5491H160.434V100.21H153.773V93.5491ZM7.24512 100.21H13.9055V106.87H7.24512V100.21ZM20.5659 100.21H27.2262V106.87H20.5659V100.21ZM40.547 100.21H47.2074V106.87H40.547V100.21ZM47.2074 100.21H53.8678V106.87H47.2074V100.21ZM53.8678 100.21H60.5281V106.87H53.8678V100.21ZM60.5281 100.21H67.1885V106.87H60.5281V100.21ZM67.1885 100.21H73.8489V106.87H67.1885V100.21ZM73.8489 100.21H80.5093V106.87H73.8489V100.21ZM87.1696 100.21H93.83V106.87H87.1696V100.21ZM107.151 100.21H113.811V106.87H107.151V100.21ZM113.811 100.21H120.472V106.87H113.811V100.21ZM120.472 100.21H127.132V106.87H120.472V100.21ZM133.792 100.21H140.453V106.87H133.792V100.21ZM153.773 100.21H160.434V106.87H153.773V100.21ZM160.434 100.21H167.094V106.87H160.434V100.21ZM167.094 100.21H173.755V106.87H167.094V100.21ZM7.24512 106.87H13.9055V113.53H7.24512V106.87ZM33.8866 106.87H40.547V113.53H33.8866V106.87ZM60.5281 106.87H67.1885V113.53H60.5281V106.87ZM67.1885 106.87H73.8489V113.53H67.1885V106.87ZM73.8489 106.87H80.5093V113.53H73.8489V106.87ZM80.5093 106.87H87.1696V113.53H80.5093V106.87ZM87.1696 106.87H93.83V113.53H87.1696V106.87ZM107.151 106.87H113.811V113.53H107.151V106.87ZM113.811 106.87H120.472V113.53H113.811V106.87ZM133.792 106.87H140.453V113.53H133.792V106.87ZM7.24512 113.53H13.9055V120.191H7.24512V113.53ZM33.8866 113.53H40.547V120.191H33.8866V113.53ZM40.547 113.53H47.2074V120.191H40.547V113.53ZM47.2074 113.53H53.8678V120.191H47.2074V113.53ZM53.8678 113.53H60.5281V120.191H53.8678V113.53ZM73.8489 113.53H80.5093V120.191H73.8489V113.53ZM93.83 113.53H100.49V120.191H93.83V113.53ZM100.49 113.53H107.151V120.191H100.49V113.53ZM113.811 113.53H120.472V120.191H113.811V113.53ZM120.472 113.53H127.132V120.191H120.472V113.53ZM127.132 113.53H133.792V120.191H127.132V113.53ZM133.792 113.53H140.453V120.191H133.792V113.53ZM140.453 113.53H147.113V120.191H140.453V113.53ZM147.113 113.53H153.773V120.191H147.113V113.53ZM153.773 113.53H160.434V120.191H153.773V113.53ZM167.094 113.53H173.755V120.191H167.094V113.53ZM60.5281 120.191H67.1885V126.851H60.5281V120.191ZM67.1885 120.191H73.8489V126.851H67.1885V120.191ZM73.8489 120.191H80.5093V126.851H73.8489V120.191ZM80.5093 120.191H87.1696V126.851H80.5093V120.191ZM93.83 120.191H100.49V126.851H93.83V120.191ZM107.151 120.191H113.811V126.851H107.151V120.191ZM113.811 120.191H120.472V126.851H113.811V120.191ZM140.453 120.191H147.113V126.851H140.453V120.191ZM160.434 120.191H167.094V126.851H160.434V120.191ZM7.24512 126.851H13.9055V133.511H7.24512V126.851ZM13.9055 126.851H20.5659V133.511H13.9055V126.851ZM20.5659 126.851H27.2262V133.511H20.5659V126.851ZM27.2262 126.851H33.8866V133.511H27.2262V126.851ZM33.8866 126.851H40.547V133.511H33.8866V126.851ZM40.547 126.851H47.2074V133.511H40.547V126.851ZM47.2074 126.851H53.8678V133.511H47.2074V126.851ZM60.5281 126.851H67.1885V133.511H60.5281V126.851ZM67.1885 126.851H73.8489V133.511H67.1885V126.851ZM100.49 126.851H107.151V133.511H100.49V126.851ZM113.811 126.851H120.472V133.511H113.811V126.851ZM127.132 126.851H133.792V133.511H127.132V126.851ZM140.453 126.851H147.113V133.511H140.453V126.851ZM160.434 126.851H167.094V133.511H160.434V126.851ZM167.094 126.851H173.755V133.511H167.094V126.851ZM7.24512 133.511H13.9055V140.172H7.24512V133.511ZM47.2074 133.511H53.8678V140.172H47.2074V133.511ZM67.1885 133.511H73.8489V140.172H67.1885V133.511ZM113.811 133.511H120.472V140.172H113.811V133.511ZM140.453 133.511H147.113V140.172H140.453V133.511ZM7.24512 140.172H13.9055V146.832H7.24512V140.172ZM20.5659 140.172H27.2262V146.832H20.5659V140.172ZM27.2262 140.172H33.8866V146.832H27.2262V140.172ZM33.8866 140.172H40.547V146.832H33.8866V140.172ZM47.2074 140.172H53.8678V146.832H47.2074V140.172ZM60.5281 140.172H67.1885V146.832H60.5281V140.172ZM73.8489 140.172H80.5093V146.832H73.8489V140.172ZM87.1696 140.172H93.83V146.832H87.1696V140.172ZM93.83 140.172H100.49V146.832H93.83V140.172ZM100.49 140.172H107.151V146.832H100.49V140.172ZM107.151 140.172H113.811V146.832H107.151V140.172ZM113.811 140.172H120.472V146.832H113.811V140.172ZM120.472 140.172H127.132V146.832H120.472V140.172ZM127.132 140.172H133.792V146.832H127.132V140.172ZM133.792 140.172H140.453V146.832H133.792V140.172ZM140.453 140.172H147.113V146.832H140.453V140.172ZM153.773 140.172H160.434V146.832H153.773V140.172ZM7.24512 146.832H13.9055V153.493H7.24512V146.832ZM20.5659 146.832H27.2262V153.493H20.5659V146.832ZM27.2262 146.832H33.8866V153.493H27.2262V146.832ZM33.8866 146.832H40.547V153.493H33.8866V146.832ZM47.2074 146.832H53.8678V153.493H47.2074V146.832ZM60.5281 146.832H67.1885V153.493H60.5281V146.832ZM80.5093 146.832H87.1696V153.493H80.5093V146.832ZM93.83 146.832H100.49V153.493H93.83V146.832ZM113.811 146.832H120.472V153.493H113.811V146.832ZM120.472 146.832H127.132V153.493H120.472V146.832ZM127.132 146.832H133.792V153.493H127.132V146.832ZM140.453 146.832H147.113V153.493H140.453V146.832ZM160.434 146.832H167.094V153.493H160.434V146.832ZM167.094 146.832H173.755V153.493H167.094V146.832ZM7.24512 153.493H13.9055V160.153H7.24512V153.493ZM20.5659 153.493H27.2262V160.153H20.5659V153.493ZM27.2262 153.493H33.8866V160.153H27.2262V153.493ZM33.8866 153.493H40.547V160.153H33.8866V153.493ZM47.2074 153.493H53.8678V160.153H47.2074V153.493ZM60.5281 153.493H67.1885V160.153H60.5281V153.493ZM67.1885 153.493H73.8489V160.153H67.1885V153.493ZM87.1696 153.493H93.83V160.153H87.1696V153.493ZM93.83 153.493H100.49V160.153H93.83V153.493ZM100.49 153.493H107.151V160.153H100.49V153.493ZM113.811 153.493H120.472V160.153H113.811V153.493ZM133.792 153.493H140.453V160.153H133.792V153.493ZM147.113 153.493H153.773V160.153H147.113V153.493ZM167.094 153.493H173.755V160.153H167.094V153.493ZM7.24512 160.153H13.9055V166.813H7.24512V160.153ZM47.2074 160.153H53.8678V166.813H47.2074V160.153ZM60.5281 160.153H67.1885V166.813H60.5281V160.153ZM67.1885 160.153H73.8489V166.813H67.1885V160.153ZM80.5093 160.153H87.1696V166.813H80.5093V160.153ZM87.1696 160.153H93.83V166.813H87.1696V160.153ZM100.49 160.153H107.151V166.813H100.49V160.153ZM107.151 160.153H113.811V166.813H107.151V160.153ZM113.811 160.153H120.472V166.813H113.811V160.153ZM127.132 160.153H133.792V166.813H127.132V160.153ZM133.792 160.153H140.453V166.813H133.792V160.153ZM140.453 160.153H147.113V166.813H140.453V160.153ZM167.094 160.153H173.755V166.813H167.094V160.153ZM7.24512 166.813H13.9055V173.474H7.24512V166.813ZM13.9055 166.813H20.5659V173.474H13.9055V166.813ZM20.5659 166.813H27.2262V173.474H20.5659V166.813ZM27.2262 166.813H33.8866V173.474H27.2262V166.813ZM33.8866 166.813H40.547V173.474H33.8866V166.813ZM40.547 166.813H47.2074V173.474H40.547V166.813ZM47.2074 166.813H53.8678V173.474H47.2074V166.813ZM60.5281 166.813H67.1885V173.474H60.5281V166.813ZM73.8489 166.813H80.5093V173.474H73.8489V166.813ZM93.83 166.813H100.49V173.474H93.83V166.813ZM100.49 166.813H107.151V173.474H100.49V166.813ZM120.472 166.813H127.132V173.474H120.472V166.813ZM153.773 166.813H160.434V173.474H153.773V166.813ZM160.434 166.813H167.094V173.474H160.434V166.813ZM167.094 166.813H173.755V173.474H167.094V166.813Z" fill="#76797B"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_448_2984">
                                                <rect width="179.83" height="179.83" fill="white" transform="translate(0.584961 0.303833)"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>

                                    }
                                    {/* if payment type is card, show this section */}
                                    {
                                        paymentType === 'card' && paymentSucess == false &&
                                        <div className="card">
                                            <form action="">
                                                <div className="item">
                                                    <label>Card Number</label>
                                                    <input type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
                                                </div>
                                                <div className="item">
                                                    <label htmlFor="">Card Holder</label>
                                                    <input type="text" placeholder="Adam Smith" />
                                                </div>
                                                <div className="group">
                                                    <div className='item'>
                                                        <label>Expire</label>
                                                        <input type="number" placeholder="04/34" pattern="\d\d?" maxLength="4" />
                                                    </div>
                                                    <div className='item'>
                                                        <label>CVC</label>
                                                        <input type="number" placeholder="000" />
                                                    </div>
                                                </div>
                                                <Button title="Make Payment" onClick={(e) => handleSendPayment(e)} />
                                            </form>
                                        </div>
                                    }
                                    {
                                        // show after place order
                                        paymentSucess == true &&
                                            <div className="status">
                                                <FaRegClock />
                                                <p>Waiting Payment at the till</p>

                                                {/* <IoCheckmarkDoneCircleOutline /> */}
                                                {/* <p>Payment aproved</p> */}

                                                {/* <GiKnifeFork /> */}
                                                {/* <p>Order Delivered</p> */}
                                            </div>
                                    }
                                </div>
                            </PaymentForm>
                        </PaymentSection>
                    }

                </div>
            </main>

            <ModalMessage title={modalMessage.title} message={modalMessage.message} navigation={modalMessage.navigate} />
            <Footer />
        </Container>
    )
}