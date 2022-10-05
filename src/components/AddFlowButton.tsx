import React, { useState } from 'react';

import '../styles/components/AddFlow.scss';

import arrow from '../assets/add_arrow.svg';

type AddFlowForm = {
    isOpened: boolean;
    setIsOpened: (value: boolean) => void;
}

function AddFlowButton({ isOpened, setIsOpened }: AddFlowForm) {

    return (
        <div className={`float ${isOpened ? ("opened") : ""}`}
            onClick={() => { setIsOpened(!isOpened) }}>
            <img className="add-flow-icon" src={arrow} />
        </div>
    )
}

export default AddFlowButton;