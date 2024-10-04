
import React from 'react';
import { useCart } from "../components/CartContext.js";

const Cart = () => {
    const { cartItems, removeFromCart, updateCartQuantity } = useCart();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, { product, quantity }) => total + product.price * quantity, 0);
    };

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <>
                    {cartItems.map(({ product, quantity }) => (
                        <div key={product.id} className="cart-item">
                            <h3>{product.name}</h3>
                            <p>{product.price} руб.</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateCartQuantity(product.id, quantity - 1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => updateCartQuantity(product.id, quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>Удалить</button>
                        </div>
                    ))}
                    <div className="total-price" style={{ textAlign: 'center', margin: '20px 0', fontSize: '18px' }}>
                        Общая стоимость: {calculateTotalPrice()} руб.
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="checkout-btn" style={{ width: '25%' }}>
                            Заказать
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
