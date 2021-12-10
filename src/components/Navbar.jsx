import React from 'react'
import { useNavigate } from "react-router-dom";
import Logout from './Logout';

const Navbar = ({ id }) => {

    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            justifyContent: (id) ? 'space-between' : 'end',
            alignItems: 'center',
            height: '3.2em'
        }}
        >
            {
                (id) ? <button className="button" href="#" onClick={() => {
                    navigate(-1)
                }}> Back </button> : null
            }

            <div>
                @somebody <Logout />
            </div>
        </div>
    )
}

export default Navbar