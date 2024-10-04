import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.price} руб.</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
    );
};

export default Product;
