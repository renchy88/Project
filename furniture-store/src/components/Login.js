import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Email должен содержать @');
            return;
        }

        try {
            const token = await login(email, password);
            console.log('Токен:', token);
            // Перенаправить на главную страницу или в кабинет пользователя
        } catch (err) {
            setError('Ошибка входа');
        }
    };

    return (
        <div className="form-container">
            <h2>Вход</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
