import React, { useState } from 'react'
import "./storage.css"
import FolderIcon from '../img/folder.png';
import InfoIcon from '../img/three-dots.png';
import Wrapper from './Wrapper';

const Storage = ({ data, type, onClickedHandler }) => {

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

                            <img src={(type == "folder") ? FolderIcon : "http://localhost:8000/" + app.body} alt="icon" className="icon" />
                            {app.name}
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default Storage