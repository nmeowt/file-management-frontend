import React, { useEffect, useRef, useState } from 'react'
import Folder from '../../../components/Folder'
import File from '../../../components/File'
import Hr from '../../../components/Hr'
import Info from '../../../components/Info'
import Wrapper from '../../../components/Wrapper'
import { StorageApi } from '../../../api/storage'

const Storage = ({ file, folder, onClickedChangeFolder }) => {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [url, setUrl] = useState('')
    const [id, setId] = useState(0)
    const ref = useRef(null);

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

    const infoHandler = (e, url, id) => {
        setUrl(url)
        setId(id)

        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        setVisible(true)
    }

    return (
        <>
            <Hr>folders</Hr>
            <Wrapper>
                {
                    folder.map((app, idx) => (
                        <Folder
                            data={app}
                            onClick={() => onClickedChangeFolder(app)}
                            onClickedInfoHandler={infoHandler}
                            key={idx}
                        />
                    ))
                }
            </Wrapper>
            <Hr>files</Hr>
            <Wrapper>
                {
                    file.map((app, idx) => (
                        <File
                            data={app}
                            onClickedInfoHandler={infoHandler}
                            key={idx}
                        />
                    ))
                }
            </Wrapper>

            {
                visible
                    ? <div ref={ref}>
                        <Info position={position} url={url} id={id} />
                    </div>
                    : null
            }
        </>
    )
}

export default Storage