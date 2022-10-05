import React from 'react';

import '../styles/components/NavBar.scss';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-item">
                <button>
                    histórico
                </button>
            </div>
            <div className="nav-item">
                <button>
                    adicionar
                </button>
            </div>
        </div>
    )
}

export default NavBar;