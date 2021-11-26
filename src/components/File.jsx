import React from 'react'
import { Link } from 'react-router-dom';
import FileIcon from '../img/file.png';
import InfoIcon from '../img/three-dots.png';
import Wrapper from './Wrapper';
import './storage.css'

const File = ({ data, onClickedHandler }) => {
    return (
        <Wrapper>
            {
                data.map((app, idx) => {
                    let preview = FileIcon
                    const url = "http://localhost:8000/" + app.body
                    const ext = app.body.split(".")[1];
                    if (ext === "jpg" || ext === "png") {
                        preview = url
                    }

                    return (
                        <div
                            to={"/file/" + app.id}
                            className="file-grid grid"
                            key={idx}
                        >
                            <img src={InfoIcon} className="info-icon" onClick={(e) => onClickedHandler(e, url)} />
                            <div className="info-image">
                                <img src={preview} alt="icon" className="icon" />
                            </div>
                            <div className="info-title">{app.name}</div>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default File