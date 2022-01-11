import React from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";

const BuildRoute = ({ children, isLogined, unauthorizeRoutes }) => {
    if (!isLogined) {
        return unauthorizeRoutes
    }

    return (
        <Router>
            <Routes>
                {children}
            </Routes>
        </Router>
    )
}

export default BuildRoute;