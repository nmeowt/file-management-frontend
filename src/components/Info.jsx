import React from 'react'
import { StorageApi } from '../api/storage'

const Info = ({ position, url, id }) => {
    const onHandleClick = () => {
        if (url) {
            window.open(url, "_blank")
        } else {
            StorageApi.download_folder(id).then(response => {
                window.open("http://localhost:8000" + response.zip_file, "_blank")
            })
        }
    }

    return (
        <div className="menu" style={{
            top: position.y + 'px',
            left: position.x + 'px'
        }}
        >
            {/* <a href={url} target="_blank" rel="noopener noreferrer" download> */}
            <button onClick={onHandleClick}>
                Download
            </button>
            {/* </a> */}
        </div>
    )
}

export default Info