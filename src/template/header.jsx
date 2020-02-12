import './header.css';
import React from 'react';

import Logo from './widgets/logo';
import Navbar from './widgets/navbar';
import TextBox from './widgets/text-box';

export default props => (
    <header className="header">
        <div className="menu">
            <Logo/>
            <Navbar/>
        </div>
        <TextBox/>
    </header>
);