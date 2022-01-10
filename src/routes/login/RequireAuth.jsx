import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Auth } from '../../api/auth';
import UserContext from '../../context/UserContext';

const RequireAuth = ({ children }) => {
    const { isLogined } = useContext(UserContext)

    console.log(isLogined)
    return (isLogined)
        ? children
        : <Navigate to="/login" replace />;
}

export default RequireAuth