import React from 'react'
import FileIcon from '../img/file.png';
import InfoIcon from '../img/three-dots.png';
import './storage.css'

const File = ({ data, onClickedInfoHandler }) => {
    let preview = FileIcon
    const url = "http://localhost:8000" + data.location
    const ext = data.body.split(".")[1];
    if (ext === "jpg" || ext === "png") {
        preview = url
    }

    return (
        <div
            className="file-grid grid"
        >
            <img src={InfoIcon} className="info-icon" onClick={(e) => onClickedInfoHandler(e, url)} />
            <div className="info-image">
                <img src={preview} alt="icon" className="icon" />
            </div>
            <div className="info-title">{data.name}</div>
        </div>
    )
}

export default File