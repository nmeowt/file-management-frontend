import React, { useState } from 'react';
import { Auth } from '../api/auth';
import UserContext from '../context/UserContext';

const UserProvider = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState([]);
    const [isLogined, setIsLogined] = useState(false);

    const handleLogin = () => {
        setError([])
        return Auth.login(user, setError, setIsLogined)
    }

    const handleLogout = () => {
        return Auth.logout(setError, setIsLogined);
    }


    return (
        <UserContext.Provider
            value={{
                handleLogin,
                user,
                setUser,
                error,
                setError,
                isLogined,
                setIsLogined,
                handleLogout
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;