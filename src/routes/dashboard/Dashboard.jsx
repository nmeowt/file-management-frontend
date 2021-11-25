import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, generatePath, useParams } from "react-router-dom";
import { StorageApi } from '../../api/storage'
import Action from '../../components/Action'
import Hr from '../../components/Hr'
import Info from '../../components/Info'
import Modal from '../../components/Modal'
import Storage from '../../components/Storage'
import { convertFormBody, toUpperCaseFirstLetter } from '../../utils/helper'
import './dashboard.css'

const Dashboard = () => {
    const [showing, setShowing] = useState(false)
    const [folder, setFolder] = useState([])
    const [file, setFile] = useState([])
    const [modalTitle, setModalTitle] = useState(null)
    const [type, setType] = useState({})
    const [name, setName] = useState('')
    const [body, setBody] = useState(null)
    const [parent, setParent] = useState(0)
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [url, setUrl] = useState('')
    const ref = useRef(null);
    const navigate = useNavigate();
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

    const infoHandler = (e, url) => {
        setUrl(url)
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        setVisible(true)
    }

    const onChangeFileHandle = (e) => {
        setBody(e.target.files[0])
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(ref)

    // const onClickedStorageHandler = (data) => {

    //     if (data.type === 1) {
    //         setFile([])
    //         setFolder([])
    //         fetchStorage(data.id)
    //     }
    // }

    const fetchStorage = (id) => {
        StorageApi.get_all_storage(id).then((response) => {
            response.map((data) => {
                if (data.type === 1) setFolder(prev => [...prev, data])
                else setFile(prev => [...prev, data])
            })
        })
    }

    useEffect(() => {
        fetchStorage(id ? id : parent)
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
                <Storage
                    data={folder}
                    type="folder"
                    onClickedHandler={infoHandler}
                // onClickedStorageHandler={onClickedStorageHandler}
                />
                <Hr>files</Hr>
                <Storage
                    data={file}
                    type="file"
                    onClickedHandler={infoHandler}
                // onClickedStorageHandler={onClickedStorageHandler}
                />
                {
                    visible
                        ? <div ref={ref}>
                            <Info position={position} url={url} />
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Dashboard