import './header.css';
import React from 'react';

import Logo from './widgets/logo';
import Navbar from './widgets/navbar';

export default props => (
    <header className="header">
        <div className="header-box">
            <Logo/>
            <Navbar/>
        </div>
    </header>
);