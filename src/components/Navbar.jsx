import React from 'react'
import { useNavigate } from "react-router-dom";
import consts from '../consts';
import { getCookie } from '../utils/helper';
import Logout from './Logout';

const Navbar = ({ id }) => {
    const navigate = useNavigate();
    const info = getCookie(consts.USER_INFO);

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
                @{info} <Logout />
            </div>
        </div>
    )
}

export default Navbar