import React from 'react'

const Info = ({ position, url }) => {
    return (
        <div className="menu" style={{
            top: position.y + 'px',
            left: position.x + 'px'
        }}
        >
            <a href={url} target="_blank" rel="noopener noreferrer" download>
                <button>
                    Download
                </button>
            </a>
        </div>
    )
}

export default Info