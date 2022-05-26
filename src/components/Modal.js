import React from 'react';

const Modal = ({closeModal}) => {
    return (
        <div className='modal-container'>
            <div className='modal'>
                <h1>SOY UN MODAL</h1> 
                <button onClick={closeModal}>Close</button>
            </div>
            <div className='overlay'></div>
        </div>
    );
};

export default Modal;