import React from 'react';
import Yoga from '../assets/img/yoga.jpg';
import Crossfit from '../assets/img/crossfit.png';
import Hiit from '../assets/img/hiit.jpg';

export default props => (
    <section className="turmas">
        <div className="u-center-txt u-mb-big">
            <h2 className="sobre--title">Faça parte de uma de nossas Turmas</h2>
        </div>

        <div className="turmas__content">
            <div className="turmas-box">
                <img src={Yoga} alt="Turma de Yoga" className="turmas-box__cover"/>
                <h3 className="third-text-title u-margin-bottom-small">Turma de Yoga</h3>
                <p className="text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab reprehenderit aliquam magnam fugit.</p>
            </div>

            <div className="turmas-box">
                <img src={Crossfit} alt="Turma de Crossfit" className="turmas-box__cover"/>
                <h3 className="third-text-title u-margin-bottom-small">Turma de Crossfit</h3>
                <p className="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis commodi corrupti.</p>
            </div>

            <div className="turmas-box">
                <img src={Hiit} alt="Turma de Hiit" className="turmas-box__cover"/>
                <h3 className="third-text-title u-margin-bottom-small">Turma de Hiit</h3>
                <p className="text-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ducimus vero debitis nam.</p>
            </div>
        </div>
    </section>
);