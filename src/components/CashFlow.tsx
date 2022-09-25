import React from 'react';

import LineFlow from './LineFlow';

import '../styles/components/CashFlow.scss';

function CashFlow(){
    return (
        <div className="cash-flow">
            <LineFlow/>
            <LineFlow/>
            <LineFlow/>
            <LineFlow/>
            <LineFlow/>
        </div>  
    )
}

export default CashFlow;


