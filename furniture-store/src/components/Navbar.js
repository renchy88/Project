
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar" style={{ height: '30px', backgroundColor: 'black' }}>
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Просто купить</Link>
            </div>
            <div className="links" style={{ display: 'flex', gap: '15px' }}>
                <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>Корзина</Link>
                <Link to="/orders" style={{ textDecoration: 'none', color: 'white' }}>Заказы</Link>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Вход</Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Регистрация</Link>
            </div>
        </nav>
    );
}

export default Navbar;
