import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "./CartContext";
import { placeOrder } from '../api';

const CartPage = ({ isAuthenticated }) => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleOrder = async () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        try {
            const response = await placeOrder();
            console.log('Заказ оформлен', response);
        } catch (error) {
            console.error('Ошибка оформления заказа', error);
        }
    };

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <div className="item-actions">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    <p>{item.price * item.quantity} руб.</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Удалить</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleOrder} className="checkout-btn">Заказать</button>
                </>
            )}
        </div>
    );
};

export default CartPage;
