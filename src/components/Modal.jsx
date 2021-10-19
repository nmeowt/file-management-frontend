import React from 'react'
import './modal.css'
const Modal = ({ visible, children, title, onCancel, onOk }) => {
    const showHideClassName = visible ? "display-block" : "display-none";
    return (
        <>
            <div className={"modal-mask " + showHideClassName} onClick={onCancel}></div>

            <div className={"modal modal-wrap " + showHideClassName}>
                <section className="modal-main">
                    <div className="modal-header">
                        <div className="modal-title">{title}</div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button className="button" onClick={onCancel}>Cancel</button>
                        <button className="button fill" onClick={onOk}>Ok</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Modal;