import React from 'react'

const Info = ({ visible, position }) => {

    return (
        <>
            {
                visible
                    ? <div className="menu" style={{
                        top: position.y + 'px',
                        left: position.x + 'px'
                    }}>
                        <button> Menu item 1 </button>
                        <button> Menu item 2 </button>
                        <button> Menu item 3 </button>
                    </div>
                    : null
            }
        </>
    )
}

export default Info