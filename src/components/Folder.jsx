import React from 'react'
import { Link } from 'react-router-dom';
import FolderIcon from '../img/folder.png';
import InfoIcon from '../img/three-dots.png';
import './storage.css'

const Folder = ({ data, onClickedInfoHandler, onClick }) => {
    const url = "/folder/" + data.id

    return (
        <>
            <div className="folder-grid grid">
                <img src={InfoIcon} className="info-icon" onClick={(e) => onClickedInfoHandler(e, null, data.id)} />
                <Link
                    to={url}
                    onClick={onClick}
                    style={{ display: 'flex' }}
                >
                    <div className="info-image">
                        <img src={FolderIcon} alt="icon" className="icon" />
                    </div>
                    <div className="info-title">{data.name}</div>
                </Link>
            </div>
        </>
    )
}

export default Folder