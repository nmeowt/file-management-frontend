import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { StorageApi } from '../../api/storage'
import Action from '../../components/Action'
import Hr from '../../components/Hr'
import Modal from '../../components/Modal'
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
    const [parent, setParent] = useState(0)

    const { id } = useParams();


    const onCloseHandler = () => {
        setShowing(false)
    }

    const onOkHandler = () => {
        let data = {
            parent: parent,
            name: name
        }

        if (type.name === 'file') {
            fetchUploadFile().then(response => {
                data = {
                    ...data,
                    body: response.file_name,
                    file_size: response.file_size
                }

                StorageApi.create_new_file(convertFormBody(data)).then(() => {
                    fetchFile()
                })
            })

        } else {
            StorageApi.create_new_folder(convertFormBody(data)).then(() => {
                fetchFolder()
            })
        }
        setShowing(false)
    }

    const fetchUploadFile = () => {
        const formData = new FormData()
        formData.append("file", body)

        return StorageApi.upload_file(formData)
    }

    const fetchFile = () => {
        StorageApi.get_all_file().then((response) => {
            setFile(response)
        })
    }

    const fetchFolder = () => {
        StorageApi.get_all_folder().then((response) => {
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
        setBody(e.target.files[0])
    }

    const fetchStorage = (id) => {
        StorageApi.get_all_storage(id).then((response) => {
            response.map((data) => {
                if (data.type === 1) setFolder(prev => [...prev, data])
                else setFile(prev => [...prev, data])
            })
        })
    }

    useEffect(() => {
        fetchStorage(parent)
    }, [])

    return (
        <div className="dashboard-layout">
            <div className="dashboard-main container">
                <Action onClickedHandler={toggle} />
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
            </div>
            <div className="dashboard-storage">
                <Storage file={file} folder={folder} />
            </div>
        </div>
    )
}

export default Dashboard