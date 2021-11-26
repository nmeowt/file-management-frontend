import React from 'react'
import { Link } from 'react-router-dom';
import FolderIcon from '../img/folder.png';
import InfoIcon from '../img/three-dots.png';
import Wrapper from './Wrapper';
import './storage.css'

const Folder = ({ data, onClickedHandler }) => {
    return (
        <Wrapper>
            {
                data.map((app, idx) => {
                    return (
                        <Link
                            to={"/folder/" + app.id}
                            className="folder-grid grid"
                            key={idx}
                        >
                            <img src={InfoIcon} className="info-icon" onClick={(e) => onClickedHandler(e)} />
                            <div className="info-image">
                                <img src={FolderIcon} alt="icon" className="icon" />
                            </div>
                            <div className="info-title">{app.name}</div>
                        </Link>
                    )
                })
            }
        </Wrapper>
    )
}

export default Folder