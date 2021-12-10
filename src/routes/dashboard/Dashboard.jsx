import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { StorageApi } from '../../api/storage'
import Action from '../../components/Action'
import Modal from '../../components/Modal'
import Navbar from '../../components/Navbar';
import { convertFormBody, toUpperCaseFirstLetter } from '../../utils/helper'
import './dashboard.css'
import Storage from './details/Storage';

const Dashboard = () => {
    const [showing, setShowing] = useState(false)
    const [folder, setFolder] = useState([])
    const [file, setFile] = useState([])
    const [modalTitle, setModalTitle] = useState(null)
    const [type, setType] = useState({})
    const [name, setName] = useState('')
    const [body, setBody] = useState(null)

    const { id } = useParams();


    const onCloseHandler = () => {
        setShowing(false)
    }

    const onOkHandler = () => {
        let parent = (id) ? id : 0
        let data = {
            parent: parent,
            name: name
        }
        if (type.name === 'file') {
            fetchUploadFile(parent).then(response => {
                data = {
                    ...data,
                    body: response.file_name,
                    file_size: response.file_size,
                    location: response.location
                }

                StorageApi.create_new_file(convertFormBody(data)).then(() => {
                    fetchFile(parent)
                })
            })

        } else {
            StorageApi.create_new_folder(convertFormBody(data)).then(() => {
                fetchFolder(parent)
            })
        }
        setShowing(false)
    }

    const fetchUploadFile = (parent) => {
        const formData = new FormData()
        formData.append("file", body)
        formData.append("parent", parent)

        return StorageApi.upload_file(formData)
    }

    const fetchFile = (id) => {
        StorageApi.get_all_file(id).then((response) => {
            setFile(response)
        })
    }

    const fetchFolder = (id) => {
        StorageApi.get_all_folder(id).then((response) => {
            setFolder(response)
        })
    }

    const toggle = (dataType) => {
        setName("Untitled " + dataType.name)
        setType(dataType)
        setModalTitle(toUpperCaseFirstLetter(dataType.name))
        setShowing(true)
    }

    const onChangeFileHandle = (e) => {
        const file = e.target.files[0]
        setBody(file)
        setName(file.name)
    }

    const fetchStorage = (id) => {
        fetchFolder(id)
        fetchFile(id)
    }

    const onClickedChangeFolder = (data) => {
        folder([])
        file([])
        fetchStorage(id)
    }

    useEffect(() => {
        fetchStorage(id ? id : 0)
    }, [])

    return (
        <div className="dashboard-layout">
            <div>
                <Navbar id={id} />
            </div>
            <div className="dashboard-main container">
                <Action onClickedHandler={toggle} />
                <Modal
                    visible={showing}
                    title={"New " + modalTitle}
                    onCancel={onCloseHandler}
                    onOk={onOkHandler}
                >
                    {
                        type.name === "file"
                            ? <input type="file" name="body" onChange={onChangeFileHandle} />
                            : <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    }
                </Modal>
            </div>
            <div className="dashboard-storage">
                <Storage file={file} folder={folder} onClickedChangeFolder={onClickedChangeFolder} />
            </div>
        </div>
    )
}

export default Dashboard