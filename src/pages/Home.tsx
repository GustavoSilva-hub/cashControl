import React from 'react';

import Dashboard from '../components/Dashboard';

import '../styles/pages/Home.scss';
function Home(){
    return(
        <div className="home-page">
            <div className="content">
                <Dashboard/>
            </div>
        </div>
    )
}

export default Home;