import React from 'react';

import Dashboard from '../components/Dashboard';
import CashFlow from '../components/CashFlow';
import AddFlowContainer from '../components/AddFlowContainer';

import '../styles/pages/Home.scss';

function Home() {
    return (
        <div className="home-page">
            <div className="content">
                <AddFlowContainer />
                <Dashboard />
                <CashFlow />
            </div>
        </div>
    )
}

export default Home;