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

export function Orders() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [orders, setOrders] = useState([])

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
                <Title title="My Orders" />
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
                                            <StatusIcon className={order.status}>
                                                <GoDotFill />
                                                {order.status}
                                            </StatusIcon>
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
                                        <p>
                                            <StatusIcon className={order.status}>
                                                <GoDotFill />
                                                {order.status}
                                            </StatusIcon>
                                        </p>
                                        <p>{getFormatedDate(order.created_at)} at {getFormatedTime(order.created_at)}</p>
                                    </div>
                                    <p className="description">{order.description}</p>
                                </ItemOrder>    

                            ))
                        }
            </main>


            <Footer />
        </Container>
    )
}