import { Container, Table, ItemOrder, StatusIcon } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Menu } from '../../components/Menu'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { GoDotFill } from "react-icons/go";
import { useAuth } from '../../hooks/auth'
import { ModalMessage } from '../../components/ModalMessage'

export function Orders() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [orders, setOrders] = useState([])
    const [modalMessage, setModalMessage] = useState({ message: '', title: '', confirmType: false, fncConfirm: '' })

    //verify is is admin, default comes false
    const { role = 'user' } = useAuth()
    let isAdmin = false
    if(role === 'admin') isAdmin = true

    function getFormatedDate(date) {
        const month = new Date(date).getMonth() + 1; // Months are zero-based, so we add 1
        const day = new Date(date).getDate();
    
        return `${day}/${month}`;
    }
    function getFormatedTime(date) {
        const hours = new Date(date).getHours()
        const minutes = new Date(date).getMinutes()
        
        return `${hours}h${String(minutes).padStart(2, '0')}`
    }
    //update order status by admin
    async function handleUpdateOrderStatus(id, status) {
        api.patch(`/orders/${id}`, { status })
        .then(response => {
            setModalMessage({ title: 'Sucess!', message: `Order ${id} updated to "${status}"`, navigate: '/orders'})
            console.log('Order updated')
        }).catch(error => {
            console.log('Error updating order: ', error)
        })
    }

    useEffect(() => {
        api.get('/orders').then(response => {
            setOrders(response.data)
        }).catch(error => {
            console.error('Error fetching movie data:', error);
          });
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
                <Title title={isAdmin ? "Orders" : "My Orders"} />
                <Table>
                    <thead>
                        <tr>
                            <td>Status</td>
                            <td>Code</td>
                            <td>Description</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((order, index) =>(
                                <tr key={String(index)}>
                                    <td>
                                        <span>
                                            {
                                                isAdmin
                                                ?
                                                <form action="">
                                                    <select onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}>
                                                        <option>{order.status}</option>
                                                        {order.status === "pending" ? null : <option>pending</option>}
                                                        {order.status === "prepared" ? null : <option>prepared</option>}
                                                        {order.status === "delivered" ? null : <option>delivered</option>}
                                                    </select>
                                                </form>
                                                :
                                                <StatusIcon className={order.status}>
                                                    <GoDotFill />
                                                    {order.status}
                                                </StatusIcon>
                                            }
                                        </span>
                                    </td>
                                    <td>{String(order.id).padStart(4, '0')}</td>
                                    <td>{order.description}</td>
                                    <td>{getFormatedDate(order.created_at)} at {getFormatedTime(order.created_at)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                        {
                            orders && orders.map((order, index) => (
                                <ItemOrder key={String(index)}>
                                    <div className="header">
                                        <p>{String(order.id).padStart(4, '0')}</p>
                                        <span>
                                        {
                                                isAdmin
                                                ?
                                                <form action="">
                                                    <select onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}>
                                                        <option>{order.status}</option>
                                                        {order.status === "pending" ? null : <option>pending</option>}
                                                        {order.status === "prepared" ? null : <option>prepared</option>}
                                                        {order.status === "delivered" ? null : <option>delivered</option>}
                                                    </select>
                                                </form>
                                                :
                                                <StatusIcon className={order.status}>
                                                    <GoDotFill />
                                                    {order.status}
                                                </StatusIcon>
                                            }
                                        </span>
                                        <p>{getFormatedDate(order.created_at)} at {getFormatedTime(order.created_at)}</p>
                                    </div>
                                    <p className="description">{order.description}</p>
                                </ItemOrder>    

                            ))
                        }
            </main>

            <ModalMessage
            title={modalMessage.title}
            message={modalMessage.message}
            navigation={modalMessage.navigate}

            />
            <Footer />
        </Container>
    )
}