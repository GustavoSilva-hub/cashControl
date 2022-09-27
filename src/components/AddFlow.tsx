import React, { useState } from 'react';

import '../styles/components/AddFlow.scss';

function AddFlow() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className={`float ${isOpened?("opened"):""}`} 
        onClick={()=>{setIsOpened(!isOpened)}}>
            <i className="one"></i>
            <i className="two"></i>
        </div>
    )
}

function addFlowOptions() {
    return (
        <div className="add-in-flow">
            <span className="title add-flow-title">Novo morado</span>
            <form action="submit">
                <div className="form-group">
                    <div className="form-item">
                        <label>Nome</label>
                        <input value="Ana Luiza" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-item">
                        <label>Lado</label>
                        <select>
                            <option>A</option>
                            <option>B</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label>Apt</label>
                        <select>
                            <option>Apt. 102</option>
                            <option>Apt. 103</option>
                        </select>
                    </div>
                </div>
                <div className="form-item-submit">
                    <input type="submit" value="Registrar" />
                </div>
            </form>
        </div>
    )
}

export default AddFlow;