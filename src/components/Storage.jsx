import React from 'react'
import "./folder.css"
import FolderIcon from '../img/folder.png';
import ImageIcon from '../img/image.png';
import Wrapper from './Wrapper';
const Storage = ({ data, type }) => {

    return (
        <Wrapper>
            {
                data.map((app, idx) => (
                    (type == "folder") ?
                        (
                            <div className="folder-grid grid" key={idx}>
                                <img src={FolderIcon} alt="folder-icon" className="folder-icon" />
                                {app.name}
                            </div>
                        ) :
                        (
                            <div className="file-grid grid" key={idx}>
                                <img src={ImageIcon} alt="file-icon" className="file-icon" />
                                {app.name}
                            </div>
                        )
                ))
            }
        </Wrapper>
    )
}

export default Storage