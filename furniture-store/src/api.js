const API_HOST = 'http://lifestealer86.ru/api-shop';

export const registerUser = async (email, password) => {
    const response = await fetch(`${API_HOST}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const placeOrder = async (token) => {
    const response = await fetch(`${API_HOST}/order`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
    return response.json();
};

export const getOrderHistory = async (token) => {
    const response = await fetch(`${API_HOST}/order`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });
    return response.json();
};


export const loginUser = async (email, password) => {
    const response = await fetch(`${API_HOST}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};
