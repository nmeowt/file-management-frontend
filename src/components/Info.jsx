import React, { useEffect, useRef, useState } from 'react'
import { StorageApi } from '../api/storage'
import { api } from '../utils/helper'


const Info = ({ position, url }) => {
    const onClickedDownloadHandler = () => {
        api(
            "GET",
            url
        ).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="menu" style={{
            top: position.y + 'px',
            left: position.x + 'px'
        }}
        >
            <button onClick={onClickedDownloadHandler}>Download</button>
        </div>
    )
}

export default Info