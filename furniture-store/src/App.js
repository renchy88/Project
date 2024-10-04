import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import OrderHistory from './components/OrderHistory';
import { CartProvider } from './components/CartContext';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orders" element={<OrderHistory />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
