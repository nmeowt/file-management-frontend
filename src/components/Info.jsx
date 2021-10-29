import React, { useEffect, useRef, useState } from 'react'


const Info = ({ position }) => {
    const action = [
        { name: 'View' },
        { name: 'Download' },
        { name: 'Remove' },
    ]

    return (
        <div className="menu" style={{
            top: position.y + 'px',
            left: position.x + 'px'
        }}
        >
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
        </div>
    )
}

export default Info