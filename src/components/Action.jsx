import React, { useEffect, useState } from 'react'
import { TypeApi } from '../api/type'
import "./action.css"

const Action = ({ onClickedHandler }) => {
    const data = [
        {
            title: "Create New Folder",
            type: "folder"
        },
        {
            title: "Add New File",
            type: "file"
        }
    ]

    const [action, setAction] = useState([])

    const fetchType = () => {
        TypeApi.get_all_type().then(response => {

            response.map((e, i) => {
                let temp = data.find(element => element.type === e.name)
                if (temp.title) {
                    e.title = temp.title
                }
                setAction(prev => [...prev, e])
            })
        })
    }

    useEffect(() => {
        fetchType()
    }, [])

    return (
        <div className="action-list">
            {
                action.map((app, idx) => (
                    <button className="button" key={idx} onClick={() => onClickedHandler(app)}>{app.title}</button>
                ))
            }
        </div >
    )
}

export default Action