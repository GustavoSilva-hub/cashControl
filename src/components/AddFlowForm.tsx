import React, { useState } from 'react';

import '../styles/components/AddFlowForm.scss';

type AddFlowForm = {
    isOpened: boolean;
    setIsOpened: (value: boolean) => void;
}

function AddFlowForm({ isOpened, setIsOpened }: AddFlowForm) {
    const [isShowingInFlow, setIsShowingInFlow] = useState(true);

    return (
        <div className={`add-flow-form ${isOpened ? ("isOpened") : ("")}`}>

            <form action="submit">
                <div className="form-group">
                    <div className="form-item">
                        <label>Novo fluxo de caixa</label>
                        <select id="kind-of-flow" onChange={() => { setIsShowingInFlow(!isShowingInFlow) }}>
                            <option value="0">Receita</option>
                            <option value="1">Despesa</option>
                        </select>
                    </div>
                </div>
                {
                    isShowingInFlow ? (
                        <InFlow />
                    ) : (
                        <OutFlow />
                    )
                }

                <div className="form-item-submit">
                    <input type="submit" value="Registrar" />
                </div>
            </form>
        </div>
    )
}


function InFlow() {
    return (
        <div className="form-flow-items">
            <div className="form-group">
                <div className="form-item">
                    <label>Descrição</label>
                    <input value="Pintura das paredes" />
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
        </div>
    )
}

function OutFlow() {
    return (
        <div className="form-flow-items">
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
        </div>
    )
}

export default AddFlowForm;