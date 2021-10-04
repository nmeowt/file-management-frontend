import React from 'react'
import "./action.css"

const Action = ({ onClickedHandle }) => {
    const action = [
        {
            title: "Create New Folder",
            type: "folder"
        },
        {
            title: "Add New File",
            type: "file"
        }
    ]

    return (
        <div className="action-list">
            {
                action.map((app, idx) => (
                    <button className="button" key={idx} onClick={() => onClickedHandle(app.type)}>{app.title}</button>
                ))
            }
        </div >
    )
}

export default Action