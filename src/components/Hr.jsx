import React from 'react'
import './hr.css'
const Hr = ({ children }) => {
    return (
        <div className="hr-wrap">
            <div className="hr"></div>
            <div className="hr__text">
                {children}
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Hr;