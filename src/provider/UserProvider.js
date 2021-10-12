import React, { useState } from 'react';
import { Auth } from '../auth';
import UserContext from '../context/UserContext';

const UserProvider = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState([]);
    const [isLogined, setIsLogined] = useState(false);

    const handleLogin = () => {
        var formBody = []
        setError([])
        for (const name in user) {
            formBody.push(name + "=" + user[name])
        }
        formBody = formBody.join("&")
        Auth.login(formBody, setError, setIsLogined)
        formBody = [];
    }

    return (
        <UserContext.Provider
            value={{
                handleLogin,
                setUser,
                error,
                setError,
                isLogined,
                setIsLogined
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;