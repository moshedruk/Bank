import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const naviget = useNavigate()

    const login = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); 
        setIsLoggedIn(true); 
    };

    if (isLoggedIn) {
        naviget("/menu")         
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={login}> {/* הוספת onSubmit */}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <button type="submit">Login</button> {/* כפתור יגיש את הטופס */}
            </form>           
        </div>
    );
}
