import React, { useState } from 'react'
import "./storage.css"
import FolderIcon from '../img/folder.png';
import ImageIcon from '../img/image.png';
import Wrapper from './Wrapper';
const Storage = ({ data, type }) => {
    // const [selected, setSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const onClickedHandle = (index) => {
        setSelectedItem(index)
    }

    return (
        <Wrapper>
            {
                data.map((app, idx) => (
                    (type == "folder") ?
                        (
                            <div
                                className={"folder-grid grid " + (idx === selectedItem ? "selected" : null)}
                                key={idx}
                                onClick={() => onClickedHandle(idx)}
                            >
                                <img src={FolderIcon} alt="folder-icon" className="folder-icon" />
                                {app.name}
                            </div>
                        ) :
                        (
                            <div
                                className={"file-grid grid " + (idx === selectedItem ? "selected" : null)}
                                key={idx}
                                onClick={() => onClickedHandle(idx)}
                            >
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