
import React, { useContext } from 'react';
import { CartContext } from "../components/CartContext.js";

const productsByCategory = {
    "Диваны": [
        { id: 1, name: 'Диван 1', price: 10000, image: '/images/sofa1.jpg' },
        { id: 2, name: 'Диван 2', price: 12000, image: '/images/sofa2.jpg' }
    ],
    "Стулья": [
        { id: 3, name: 'Стул 1', price: 1500, image: '/images/chair1.jpg' },
        { id: 4, name: 'Стул 2', price: 1800, image: '/images/chair2.jpg' }
    ],
    "Столы": [
        { id: 5, name: 'Стол 1', price: 5000, image: '/images/table1.jpg' },
        { id: 6, name: 'Стол 2', price: 6000, image: '/images/table2.jpg' }
    ],
    "Кровати": [
        { id: 7, name: 'Кровать 1', price: 12000, image: '/images/bed1.jpg' },
        { id: 8, name: 'Кровать 2', price: 15000, image: '/images/bed2.jpg' }
    ],
    "Шкафы": [
        { id: 9, name: 'Шкаф 1', price: 9000, image: '/images/wardrobe1.jpg' },
        { id: 10, name: 'Шкаф 2', price: 11000, image: '/images/wardrobe2.jpg' }
    ]
};

const ProductList = () => {
    const { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

    const getItemQuantity = (id) => {
        const item = cartItems.find(product => product.id === id);
        return item ? item.quantity : 0;
    };

    return (
        <div className="product-grid" style={{ margin: '20px auto', maxWidth: '1200px' }}>
            {Object.keys(productsByCategory).map((category) => (
                <div key={category} style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                        {category}
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {productsByCategory[category].map((product) => (
                            <div key={product.id} className="product-card" style={{ padding: '15px', border: '1px solid #1a1a1a', width: '200px' }}>
                                <img src={product.image} alt={product.name} className="product-image" style={{ maxWidth: '100%', height: 'auto' }} />
                                <h3>{product.name}</h3>
                                <p className="price">{product.price} руб.</p>

                                {getItemQuantity(product.id) === 0 ? (
                                    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                                ) : (
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                        <span>{getItemQuantity(product.id)}</span>
                                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                                        <button onClick={() => removeFromCart(product.id)}>Удалить из корзины</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
