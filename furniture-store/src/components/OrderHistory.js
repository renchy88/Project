
import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../api';

const OrderHistory = ({ token }) => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchOrders() {
            try {
                const data = await getOrderHistory(token);
                setOrders(data.orders);
            } catch (err) {
                setError('Не удалось загрузить историю заказов');
            }
        }
        fetchOrders();
    }, [token]);

    if (error) return <p>{error}</p>;

    if (orders.length === 0) {
        return <p>История заказов пуста.</p>;
    }

    return (
        <div>
            <h2>История заказов</h2>
            {orders.map(order => (
                <div key={order.id}>
                    <h3>Заказ №{order.id}</h3>
                    <p>Сумма: {order.order_price} руб.</p>
                    <p>Товары: {order.products.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
