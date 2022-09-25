import React from 'react';

import '../styles/components/LineFlow.scss';

function LineFlow(){
    return (
        <div className="line-flow">
            <div className="secondary-info">
                <span className="apt-name service-kind">
                    apt. 102
                </span>
                <span className="date">
                    03/10/2022
                </span>
            </div>
            <div className="primary-info">
                <span className="resident service">
                    Ana Luiza
                </span>
                <span className="value">
                    + R$ 30,00
                </span>
            </div>
        </div>
    )
}

export default LineFlow;