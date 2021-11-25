import React, { useState } from 'react'
import "./storage.css"
import FolderIcon from '../img/folder.png';
import FileIcon from '../img/file.png';
import InfoIcon from '../img/three-dots.png';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

const Storage = ({ data, type, onClickedHandler, onClickedStorageHandler }) => {
    return (
        <Wrapper>
            {
                data.map((app, idx) => {
                    const url = "http://localhost:8000/" + app.body
                    let preview = FolderIcon
                    if (type === "file") {
                        const ext = app.body.split(".")[1];
                        if (ext === "jpg" || ext === "png") {
                            preview = url
                        } else {
                            preview = FileIcon
                        }
                    }

                    return (
                        <Link
                            to={"/folder/" + app.id}
                            className={
                                (
                                    (type === "folder")
                                        ? "folder-grid "
                                        : "file-grid "
                                )
                                + "grid"
                            }
                            key={idx}
                        >
                            <img src={InfoIcon} className="info-icon" onClick={(e) => onClickedHandler(e, url)} />
                            <div className="info-image">
                                <img src={preview} alt="icon" className="icon" />
                            </div>
                            <div className="info-title">{app.name}</div>
                        </Link>
                    )
                })
            }
        </Wrapper>
    )
}

export default Storage