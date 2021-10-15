import React, { useEffect, useState } from 'react'
import { StorageApi } from '../../api/storage'
import Action from '../../components/Action'
import Hr from '../../components/Hr'
import Modal from '../../components/Modal'
import Storage from '../../components/Storage'
import './dashboard.css'

const Dashboard = () => {
    const folder = [
        {
            name: "Folder 1",
        },
        {
            name: "Folder 2",
        },
        {
            name: "Folder 3",
        },
        {
            name: "Folder 4",
        },
        {
            name: "Folder 5",
        },
        {
            name: "Folder 6",
        },
        {
            name: "Folder 7",
        }
    ]

    const file = [
        {
            name: "File 1",
        },
        {
            name: "File 2",
        },
        {
            name: "File 3",
        },
        {
            name: "File 4",
        },
        {
            name: "File 5",
        },
        {
            name: "File 6",
        },
        {
            name: "File 7",
        }
    ]

    const [showing, setShowing] = useState(false)




    const onCloseHandler = () => {
        setShowing(false)
    }

    const onOkHandler = () => { }

    const fetchStorage = () => {
        StorageApi.get_all_storage(1).then((storage) => { console.log(storage); })
    }

    const toggle = () => {
        setShowing(true)
    }

    useEffect(() => {
        fetchStorage()
    }, [])

    return (
        <div className="dashboard-layout">
            <div className="dashboard-main container">
                <Action onClickedHandle={toggle} />
                <Hr>folders</Hr>
                <Storage data={folder} type="folder" />
                <Hr>files</Hr>
                <Storage data={file} type="file" />
                <Modal
                    visible={showing}
                    title="New Folder"
                    onCancel={onCloseHandler}
                    onOk={onOkHandler}
                >
                    <input type="text" name="name" value="Untitled folder" />
                </Modal>
            </div>
        </div>
    )
}

export default Dashboard