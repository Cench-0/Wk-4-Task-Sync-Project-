
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/api';

const Login = () => {
    const { setUser, setToken } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(username, password);
        setUser(username);
        setToken(response.data.access_token);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
