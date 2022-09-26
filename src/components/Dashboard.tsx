import React from 'react';

import '../styles/components/Dashboard.scss';

function Dashboard() {
    return(
        <div className="dashboard">
        <div className="current-cash">
            <div className="months">
                <span className="month">Jun</span>
                <span className="month current">Julho</span>
                <span className="month">Agost</span>
            </div>
            <div className="cash">
                <span>R$ 26.000,55</span>
            </div>
        </div>
        <div className="inflows-outflows">
            <div className="inflows">
                <div className="flow-title">
                    <span>
                        Total de despesas
                    </span>
                </div>
                <div className="flow-cash">
                    <span>
                        -R$ 40,00
                    </span> 
                </div>
            </div>
            <div className="outflows">
                <div className="flow-title">
                    <span>
                        Total de receitas
                    </span>
                </div>
                <div className="flow-cash">
                    <span>
                        +R$ 8000,00
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default Dashboard;