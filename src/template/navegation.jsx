import React from 'react';

export default () => (
    <div className="navegation">
        <input type="checkbox" className="navegation__checkbox" id="navi-toggle"/>

        <label for="navi-toggle" className="navegation__button">
            <span className="navegation__icon">&nbsp;</span>
        </label>
        
        <nav className="navegation__nav">
            <ul className="navegation__list">
                <li className="navegation__item"><a href="#" className="navegation__link">Sobre</a></li>
                <li className="navegation__item"><a href="#" className="navegation__link">Turmas</a></li>
                <li className="navegation__item"><a href="#" className="navegation__link">Preços</a></li>
                <li className="navegation__item"><a href="#" className="navegation__link">Testemunhos</a></li>
                <li className="navegation__item"><a href="#" className="navegation__link">Assine já</a></li>
            </ul>

        </nav>
    </div>
);