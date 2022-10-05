import React, { useState } from 'react';

import '../styles/components/AddFlowContainer.scss';

import AddFlowForm from './AddFlowForm';
import AddFlowButton from './AddFlowButton';

function AddFlowContainer() {
    const [isOpened, setIsOpened] = useState(false);


    return (
        <div className="add-flow-container">
            <AddFlowForm isOpened={isOpened} setIsOpened={setIsOpened} />
            <AddFlowButton isOpened={isOpened} setIsOpened={setIsOpened} />
        </div>
    )
}

export default AddFlowContainer;