import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Logout = () => {
    const { handleLogout } = useContext(UserContext)

    return (
        <>
            <a
                style={{
                    color: 'rgb(102 102 102 / 50%)',
                    fontWeight: 0
                }}
                onClick={handleLogout}
            > (logout) </a>
        </>
    )
}

export default Logout