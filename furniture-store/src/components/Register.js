import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Email должен содержать @');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        try {
            await register(email, password);
            console.log('Регистрация успешна');
            // Перенаправить на страницу входа
        } catch (err) {
            setError('Ошибка регистрации');
        }
    };

    return (
        <div className="form-container">
            <h2>Регистрация</h2>
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
                <input
                    type="password"
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Register;
