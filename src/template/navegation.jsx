import React from 'react';
import { Link } from 'react-scroll';

export default () => (
    <div className="navegation">
        <input type="checkbox" className="navegation__checkbox" id="navi-toggle"/>

        <label for="navi-toggle" className="navegation__button">
            <span className="navegation__icon">&nbsp;</span>
        </label>
        
        <nav className="navegation__nav">
            <ul className="navegation__list">
                <li className="navegation__item"><Link
                activeClass="active"
                to="sobre"
                spy="true"
                smooth="true"
                offset={0}
                duration={500}><a href="#" className="navegation__link">Sobre</a></Link></li>


                <li className="navegation__item"><Link
                activeClass="active"
                to="turmas"
                spy="true"
                smooth="true"
                offset={0}
                duration={500}><a href="#" className="navegation__link">Turmas</a></Link></li>


                <li className="navegation__item"><Link
                activeClass="active"
                to="precos"
                spy="true"
                smooth="true"
                offset={0}
                duration={500}><a href="#" className="navegation__link">Preços</a></Link></li>


                <li className="navegation__item"><Link
                activeClass="active"
                to="testemunhos"
                spy="true"
                smooth="true"
                offset={0}
                duration={500}><a href="#" className="navegation__link">Testemunhos</a></Link></li>

                <li className="navegation__item"><Link
                activeClass="active"
                to="assinar"
                spy="true"
                smooth="true"
                offset={0}
                duration={500}><a href="#" className="navegation__link">Assine Já</a></Link></li>
            </ul>

        </nav>
    </div>
);