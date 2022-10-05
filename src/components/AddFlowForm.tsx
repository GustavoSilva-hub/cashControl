import React from 'react';

import '../styles/components/AddFlowForm.scss';

type AddFlowForm = {
    isOpened: boolean;
    setIsOpened: (value: boolean) => void;
}

function AddFlowForm({ isOpened, setIsOpened }: AddFlowForm) {
    return (
        <div className={`add-flow-form ${isOpened ? ("isOpened") : ("")}`}>
            <span className="title add-flow-title">Novo fluxo de caixas</span>
            <div className="kind-of-flow">
                <select id="kind-of-flow">
                    <option value="0">Receita</option>
                    <option value="1">Despesa</option>
                </select>
            </div>
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

export default AddFlowForm;