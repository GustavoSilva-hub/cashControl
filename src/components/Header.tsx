import React from 'react';

function Header(){
    return (
        <div className="header">
            <div>
                <span>Logo</span>
            </div>
            <nav>
                <a href="#" className="nav">
                    Home
                </a>
                <a href="#" className="nav">
                    Moradores
                </a>
            </nav>
        </div>
    )
}

export default Header;