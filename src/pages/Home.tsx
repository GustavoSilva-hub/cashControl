import React from 'react';

import Dashboard from '../components/Dashboard';
import CashFlow from '../components/CashFlow';
import AddFlow from '../components/AddFlow';

import '../styles/pages/Home.scss';

function Home(){
    return(
        <div className="home-page">
            <div className="content">
                <Dashboard/>
                <CashFlow/>
                <AddFlow/>
            </div>
        </div>
    )
}

export default Home;