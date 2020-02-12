import './navbar.css';
import React from 'react';

export default props => (
    <div className="navbar">
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/classe">Classes</a></li>
            <li><a href="#/projetos">Projetos</a></li>
            <li><a href="#/treinadores">Treinadores</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/contato">Contato</a></li>
        </ul>
    </div>
);