import React, { useEffect, useRef, useState } from 'react'
import Folder from '../../../components/Folder'
import File from '../../../components/File'
import Hr from '../../../components/Hr'
import Info from '../../../components/Info'

const Storage = ({ props, file, folder }) => {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [url, setUrl] = useState('')
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
    const infoHandler = (e, url) => {
        setUrl(url)
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        setVisible(true)
    }

    return (
        <>
            <Folder
                data={folder}
                onClickedHandler={infoHandler}
            />
            <Hr>files</Hr>
            <File
                data={file}
                onClickedHandler={infoHandler}
            />
            {
                visible
                    ? <div ref={ref}>
                        <Info position={position} url={url} />
                    </div>
                    : null
            }
        </>
    )
}

export default Storage