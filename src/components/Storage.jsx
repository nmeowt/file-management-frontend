import React, { useState } from 'react'
import "./storage.css"
import FolderIcon from '../img/folder.png';
import ImageIcon from '../img/image.png';
import InfoIcon from '../img/three-dots.png';
import Wrapper from './Wrapper';

const Storage = ({ data, type, onClickedHandler }) => {
    const icon = (type == "folder") ? FolderIcon : ImageIcon

    return (
        <Wrapper>
            {
                data.map((app, idx) => {
                    return (
                        <div
                            className={
                                (
                                    (type == "folder")
                                        ? "folder-grid "
                                        : "file-grid "
                                )
                                + "grid"
                            }
                            key={idx}
                        >
                            <img src={InfoIcon} className="info-icon" onClick={onClickedHandler} />

                            <img src={icon} alt="icon" className="icon" />
                            {app.name}
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default Storage