import React, { useState, MouseEvent } from 'react'
import { User } from '../user.types';
import { Navigate, useNavigate } from 'react-router-dom';

type PropsType = {
    onLogin: (user: User | null) => void
}

export default function Login({ onLogin }: PropsType) {

    const [creds, setCreds] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (creds.username === 'tina' && creds.password === '123') {
            // TODO: redirect to welcome page
            // alert('welcome!');
            onLogin(creds);
            navigate('/welcome');
        } else {
            alert('Incorrect username and password!');
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <p>
                    <label>Username:</label>
                    <input value={creds.username}
                        onChange={(e) => setCreds({ ...creds, username: e.target.value })} />
                </p>
                <p>
                    <label>Password: </label>
                    <input type='password'
                        value={creds.password}
                        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                    />
                </p>
                <button onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}
