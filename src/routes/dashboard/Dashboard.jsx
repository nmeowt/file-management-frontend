import React, { useEffect, useState } from 'react'
import { StorageApi } from '../../api/storage'
import Action from '../../components/Action'
import Hr from '../../components/Hr'
import Info from '../../components/Info'
import Modal from '../../components/Modal'
import Storage from '../../components/Storage'
import { toUpperCaseFirstLetter } from '../../utils/helper'
import './dashboard.css'

const Dashboard = () => {
    const [showing, setShowing] = useState(false)
    const [folder, setFolder] = useState([])
    const [file, setFile] = useState([])
    const [modalTitle, setModalTitle] = useState(null)
    const [type, setType] = useState({})
    const [name, setName] = useState('')
    const [body, setBody] = useState()
    const [parent, setParent] = useState(0)
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const onCloseHandler = () => {
        setShowing(false)
    }

    const onOkHandler = () => {
        let data = {
            owner: 1,
            type: type.typeId,
            parent: parent,
            name: name,
            body: body
        }
        const formData = new FormData();

        for (var key in data) {
            formData.append(key, data[key])
        }

        StorageApi.create_new_storage(data)

    }

    const fetchStorage = () => {
        StorageApi.get_all_storage(1).then((response) => {
            response.map((data) => {
                if (data.type === 1) setFolder(prev => [...prev, data])
                else setFile(prev => [...prev, data])
            })
        })
    }

    const toggle = (dataType) => {
        setName("Untitled " + dataType.name)
        setType(dataType)
        setModalTitle(toUpperCaseFirstLetter(dataType.name))
        setShowing(true)
    }

    const infoHandler = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        setVisible(true)
    }

    const onChangeFileHandle = (e) => {
        setBody(e.target.files[0])
    }

    useEffect(() => {
        fetchStorage()
    }, [])

    return (
        <div className="dashboard-layout">
            <div className="dashboard-main container">
                <Action onClickedHandler={toggle} />
                <Hr>folders</Hr>
                <Storage data={folder} type="folder" onClickedHandler={infoHandler} />
                <Hr>files</Hr>
                <Storage data={file} type="file" onClickedHandler={infoHandler} />
                <Modal
                    visible={showing}
                    title={"New " + modalTitle}
                    onCancel={onCloseHandler}
                    onOk={onOkHandler}
                >
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                    {
                        type.name === "file"
                            ? <>
                                <Hr>Choose File</Hr>
                                <input type="file" name="body" onChange={onChangeFileHandle} />
                            </>
                            : null
                    }
                </Modal>
                <Info visible={visible} position={position} />
            </div>
        </div>
    )
}

export default Dashboard